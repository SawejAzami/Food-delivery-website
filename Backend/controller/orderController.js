import { Order } from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import Stripe from "stripe"



// placing user order from fronted
const placeOrder=async(req,res)=>{

    // const fronted_url = "http://localhost:5173";
    // console.log(req.body)

    try {
        const newOrder=new Order({
            userId:req.body.userId,
            items:req.body.item,
            amount:req.body.amount,
            address:req.body.address,

        })
     
        await newOrder.save();
        await User.findByIdAndUpdate(req.body.userId,{cartData:{}})
        
       
        res.json({
            success:true,
        })
    } catch (error) {
        res.json({
          success: false,
          message:"Error during payment"
        });
    }
}

const verifyOrder=async(req,res)=>{
    const {orderId,success}=req.body;
    try {
        if(success=='true'){
            await Order.findByIdAndUpdate(orderId,{payment:true});
            res.json({
                success:true,
                message:"Paid"
            })
        }else{
            await Order.findByIdAndDelete(orderId)
            res.json({
                success:false,
                message:"Not Paid"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
          success: false,
          message: "Error",
        });
    }
}
// user order for fronted
const userOrders=async(req,res)=>{
    try {
        const orders=await Order.find({userId:req.body.userId})
        res.json({
            success:true,
            data:orders,
        })
        // console.log(orders,"userOrders")
    } catch (error) {
        console.log(error)
         res.json({
           success: false,
           meassage:"Not getting order",
         });
    }
}
// listing order for admin pannel
const listOrders=async(req,res)=>{
    try {
        const orders=await Order.find({});
        res.json({
          success: true,
          data: orders,
        });
    } catch (error) {
        console.log(error)
         res.json({
           success: false,
           message: "Error",
         });
    }
}
// updating the status of order
const updateStatus=async (req,res)=>{
    try {
        await Order.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({
            success:true,
            message:"Status updated"
        })
        console.log(req.body)

    } catch (error) {
        console.log("Error")
        res.json({
          success: false,
          message: "Error in updating status of order",
        });
    }
}
export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };