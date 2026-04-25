import experss from "express"
import {
  loginUser,
  registerUser,
  emailVerify,
  generateOTP,
  changePassword,
  verify,
} from "../controller/userControler.js";



const userRouter=experss.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/verify", verify);
userRouter.post("/emailVerify", emailVerify);
userRouter.post("/generateotp", generateOTP);
userRouter.post("/changepassword", changePassword);

export default userRouter