import { Order } from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



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

const payment =async (req, res) => {
  try {
    const  orderData  = req.body;
    // console.log(req.body);
    // console.log(orderData);
    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Food Order",
            },
            unit_amount: orderData.amount * 100,
          },
          quantity: 1,
        },
      ],

      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    // console.log(session);
    const newOrder = new Order({
      userId: req.body.userId,
      items: req.body.item,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await User.findByIdAndUpdate(req.body.userId, {
      cartData: {},
      $inc: { numberOfOrder: 1 },
    });

    res.json({
      success: true,
      url: session.url,
      session,
    });
    
  } catch (error) {
    res.json({
      success: false,
      message: "payment not done",
    });
  }
};

export {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
  payment,
};