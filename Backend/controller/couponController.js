import {Coupon} from "../models/couponModel.js"

const addCoupon = async (req, res) => {
  try {
    const { code, discount, category } = req.body;
    // console.log(req.body)
    const newCoupon = new Coupon({
      code,
      discount,
      category,
    });

    await newCoupon.save();

    res.json({
      success: true,
      message: "Coupon added successfully",
      data: newCoupon,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Coupon not added",
    });
  }
};

const getCoupon = async (req, res) => {
    try {
        const coupon=await Coupon.find();
        if(coupon.length==0){
            res.json({
              success: false,
              message: "Coupon not available",
            });
        }
         res.json({
           success: true,
           message: "Coupon fetched successfully",
            coupon
         });
    } catch (error) {
         console.log(error);
         res.json({
           success: false,
           message: "Coupon not available",
         });
    }
};

const deleteCoupon = async (req, res) => {
    try {
      await Coupon.findByIdAndDelete(req.body.couponId);
      res.json({
        success: true,
        message: "Coupon deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Coupon not deleted",
      });
    }
};

export { addCoupon, deleteCoupon, getCoupon };