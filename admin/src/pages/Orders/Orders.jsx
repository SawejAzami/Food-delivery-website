import React from "react";
import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from "react";
import { assets } from "../../assets/assets";

function Orders(){
    const url="http://localhost:4000"
    
    // const url = "https://food-delivery-website-pp1o.onrender.com";
    const [orders,setOrders]=useState([]);
    const fetchAllOrders=async()=>{
        const response=await axios.get(url+"/api/order/list")
        if(response.data.success){
            setOrders(response.data.data)
        }
        else{
            toast.error("Error");
        }
    }
    const statusHandler=async(event,orderId)=>{
        const response=await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
        if(response.data.success){
            await fetchAllOrders();
        }
    }

    useEffect(()=>{
        fetchAllOrders()
        console.log(orders)

    },[])
    return (
      <>
        <div className="px-[50px] my-5 order add  w-[80%]">
          <h3>Order Page</h3>
          <div className="orderlist">
            {orders?.map((order, index) => {
              return (
                <div
                  key={index}
                  className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-start gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border border-orange-500 "
                >
                  <img src={assets.parcel_icon} alt="" />
                  <div className="">
                    <p className="font-medium">
                      {order?.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </p>
                    <p className="font-medium mt-7 mb-1">
                      {order.address.firstName + " " + order.address.lastName}
                    </p>
                    <div className="mb-2 ">
                      <p>{order.address.street + ","}</p>
                      <p>
                        {order.address.city +
                          "," +
                          order.address.country +
                          "," +
                          order.address.zipcode}
                      </p>
                    </div>
                  </div>

                  <p className="orderitemphone">{order.address.phone}</p>
                  <p className="">items: {order.items.length}</p>
                  <p className="">₹{order.amount}</p>
                  <select
                    className="bg-[#ffe8e4] border border-orange-600 w-30
                  p-2 outline-none "
                    onChange={(e) => statusHandler(e, order._id)}
                    value={order.status}
                  >
                    <option value={"Food Processing"}>Food Processing</option>
                    <option value={"Out of delivery"}>Out of delivery</option>
                    <option value={"Delivered"}>Delivered</option>
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      </>
    ); 
}
export default Orders