import {Food} from "../models/foodModel.js" 
import fs from "fs"

// add food

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food=new Food({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save()
        res.json({
            success:true,
            message:"Food added"
        })
    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message:"Food not added"
        })
    }
}


// all food list

const listFood=async(req,res)=>{
    try {
        const foods=await Food.find({});
        // console.log("foods",foods)
        res.json({
            success:true,
            data:foods
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"List of food not found"
        })
    }
}

const removeFood=async (req,res)=>{
    const {id}=req.body
    console.log(id)
    try {
        const food=await Food.findById(id)
        fs.unlink(`upload/${food.image}`,()=>{})
        await Food.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"food removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"Food not removed"
        })
    }
}

export { addFood, listFood,removeFood };