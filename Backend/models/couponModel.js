import mongoose from "mongoose";
const couponSchema=new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true,
    },
    category:{
        type:String,   
    }
})

export const Coupon=mongoose.model("Coupon",couponSchema)