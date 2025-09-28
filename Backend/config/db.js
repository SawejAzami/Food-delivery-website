import mongoose from "mongoose"

export const connectDB=async ()=>{
    try{
        await mongoose
          .connect(process.env.MONGODB_URL)
          .then(() => console.log("databse is connected"));
    }catch(error){
        console.log(error)
    }
}