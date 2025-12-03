import experss from "express"
import {
  loginUser,
  registerUser,
  verify,
  generateOTP,
} from "../controller/userControler.js";



const userRouter=experss.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/verify", verify);
userRouter.post("/generateotp", generateOTP);

export default userRouter