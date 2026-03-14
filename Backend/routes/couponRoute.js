import express from "express";
import {
  addCoupon,
  deleteCoupon,
  getCoupon,
} from "../controller/couponController.js";

const couponRouter = express.Router();

couponRouter.post("/add", addCoupon);
couponRouter.get("/get", getCoupon);
couponRouter.post("/delete", deleteCoupon);

export default couponRouter;
