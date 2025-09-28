import {User} from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


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
        const exist=await User.findOne({email})
        if(exist){
            return res.json({
                success:false,
                message:"User already exist"
            })
        }

        // validate email format and strong password
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter valid email"
            })
        }
        if(password.length<8){
             return res.json({
               success: false,
               message: "Please enter strong password",
             });
        }
        // hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser=new User({
            name:name,
            email:email,
            password:hashedPassword,

        })
       const user= await newUser.save()
        const token=createToken(user._id)
        return res.json({
          success: true,
          message: "User registered successfully",
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




export {loginUser,registerUser}