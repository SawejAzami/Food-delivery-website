import {User} from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import sendMail from "../NodeMailer/sendMail.js"
import dotenv from "dotenv";
dotenv.config();

// login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
             return res.json({
               success: false,
               message: "User does not exist",
             });
        }
        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
             return res.json({
               success: false,
               message: "Password is not correct",
             });
        }
        if(!user.isVerified){
              return res.json({
                success: false,
                message: "Email is not verified. Please verify your email.",
              });
        }

        const token=createToken(user._id);
         return res.json({
           success: true,
           message: "User Logged in successfully",
           token
         });

    } catch (error) {
        console.log(error)
         return res.json({
           success: false,
           message: "Error",
         });
    }
}
// create token

const createToken=(id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


// register user
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
      // checking user already exist
      const exist = await User.findOne({ email });
      if (exist) {
        return res.json({
          success: false,
          message: "User already exist",
        });
      }

      // validate email format and strong password
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter valid email",
        });
      }
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter strong password",
        });
      }
      if (name.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a valid name",
        });
      }
      // hashing user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const user = await newUser.save();
      const token = createToken(user._id);
      // sending email for verification
      const result=await sendMail(email,token);
      // console.log(result)

      return res.json({
        success: true,
        message: "User created. Verification email sent.",
        
      });
    } catch (error) {
        console.log(error)
        return res.json({
          success: false,
          message: "Error",
        });
    }
}

const verify= async (req, res) => {

  try {
    const { token } = req.query;
    if (!token) return res.status(400).send("Missing token");

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).send(` Invalid or expired token   `);
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(404).send("User not found");

    if (user.isVerified) return res.send("Email already verified");

    user.isVerified = true;
    await user.save();

    return res.send("Email verified successfully. You can now login.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }

};

const generateOTP = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    // console.log("User found for password change:", user);
    // sending email for verification

    const OTP = 234567; // generate OTP here
    const token = createToken(user._id, OTP);
    // sending email for verification
    await sendMail(email, token, OTP);
    user.OTP = OTP;
    await user.save();
    console.log(user);
    return res.json({
      success: true,
      message: "Password change OTP sent to your email.",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error, Password not changed",
    });
  }
};



export { loginUser, registerUser, verify, generateOTP };