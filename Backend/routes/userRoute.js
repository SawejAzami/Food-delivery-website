import experss from "express"
import {
  loginUser,
  registerUser,
  verify,
} from "../controller/userControler.js";



const userRouter=experss.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/verify", verify);

export default userRouter