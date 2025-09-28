import {User} from "../models/userModel.js"

// add item to user cart

const addToCart=async (req,res)=>{
    try {
        let userData=await User.findOne({_id:req.body.userId})
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }else{
             cartData[req.body.itemId] += 1;
        }
        await User.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({
            success:true,
            message:"Added to the Cart"
        })
    } catch (error) {
            console.log(error)
             res.json({
               success: false,
               message: "Item not added in cart",
             });
    }
}

// remove item from cart
const removeFromCart=async(req,res)=>{
    try{
        let userData=await User.findById({_id:req.body.userId})
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await User.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({
            success:true,
            message:"Item is removed from cart"
        })
    }catch(error){
        console.log(error)
        res.json({
          success: false,
          message: "Item is not removed from cart",
        });
    }
}

// fetch user cart data
const getCart=async(req,res)=>{
    try {
        let userData=await User.findById(req.body.userId)
        let cartData=await userData.cartData;
        res.json({
            success:true,
            cartData
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"Error in geting cart item"
        })
    }
}

export {addToCart,removeFromCart,getCart}