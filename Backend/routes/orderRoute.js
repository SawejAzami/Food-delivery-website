import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, payment, placeOrder, updateStatus, userOrders, verifyOrder } from "../controller/orderController.js"
const orderRouter=express.Router()

// orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status", updateStatus);
orderRouter.post("/payment",authMiddleware, payment);

export default orderRouter