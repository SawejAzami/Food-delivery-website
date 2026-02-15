import experss from "express"
import {
  loginUser,
  registerUser,
  verify,
  generateOTP,
  changePassword,
} from "../controller/userControler.js";



const userRouter=experss.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/verify", verify);
userRouter.post("/generateotp", generateOTP);
userRouter.post("/changepassword", changePassword);

export default userRouter