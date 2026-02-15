// import React from "react";
// import { useState } from "react";
// import axios from "axios"
// import {toast} from "react-toastify"
// import { useEffect } from "react";
// import { assets } from "../../assets/assets";

// function Orders(){
//     const url="http://localhost:4000"

//     // const url = "https://food-delivery-website-pp1o.onrender.com";
//     const [orders,setOrders]=useState([]);
//     const fetchAllOrders=async()=>{
//         const response=await axios.get(url+"/api/order/list")
//         if(response.data.success){
//             setOrders(response.data.data)
//         }
//         else{
//             toast.error("Error");
//         }
//     }
//     const statusHandler=async(event,orderId)=>{
//         const response=await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
//         if(response.data.success){
//             await fetchAllOrders();
//         }
//     }

//     useEffect(()=>{
//         fetchAllOrders()
//         console.log(orders)

//     },[])
//     return (
//       <>
//         <div className="px-[50px] my-5 order add  w-[80%]">
//           <h3>Order Page</h3>
//           <div className="orderlist">
//             {orders?.map((order, index) => {
//               return (
//                 <div
//                   key={index}
//                   className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-start gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border border-orange-500 "
//                 >
//                   <img src={assets.parcel_icon} alt="" />
//                   <div className="">
//                     <p className="font-medium">
//                       {order?.items.map((item, index) => {
//                         if (index === order.items.length - 1) {
//                           return item.name + " x " + item.quantity;
//                         } else {
//                           return item.name + " x " + item.quantity + ", ";
//                         }
//                       })}
//                     </p>
//                     <p className="font-medium mt-7 mb-1">
//                       {order.address.firstName + " " + order.address.lastName}
//                     </p>
//                     <div className="mb-2 ">
//                       <p>{order.address.street + ","}</p>
//                       <p>
//                         {order.address.city +
//                           "," +
//                           order.address.country +
//                           "," +
//                           order.address.zipcode}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="orderitemphone">{order.address.phone}</p>
//                   <p className="">items: {order.items.length}</p>
//                   <p className="">₹{order.amount}</p>
//                   <select
//                     className="bg-[#ffe8e4] border border-orange-600 w-30
//                   p-2 outline-none "
//                     onChange={(e) => statusHandler(e, order._id)}
//                     value={order.status}
//                   >
//                     <option value={"Food Processing"}>Food Processing</option>
//                     <option value={"Out of delivery"}>Out of delivery</option>
//                     <option value={"Delivered"}>Delivered</option>
//                   </select>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     );
// }
// export default Orders

// ************* Upgraded Code *************

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

function Orders() {
  // const API_BASE = "http://localhost:4000"; // change to production base when ready

  const API_BASE = "https://food-delivery-website-backend-2q5v.onrender.com";
  const FALLBACK_IMAGE = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState("");

  const fetchAllOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(API_BASE + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data || []);
      } else {
        setError("Failed to load orders");
        toast.error(response.data.message || "Failed to load orders");
      }
    } catch (err) {
      console.error("fetchAllOrders:", err);
      setError("Network error");
      toast.error("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusColor = (status) => {
    const s = String(status || "").toLowerCase();
    if (s.includes("delivered")) return "bg-emerald-500 text-white";
    if (
      s.includes("out") ||
      s.includes("out of delivery") ||
      s.includes("shipped")
    )
      return "bg-amber-500 text-white";
    if (s.includes("processing") || s.includes("food"))
      return "bg-sky-500 text-white";
    if (s.includes("cancel")) return "bg-red-500 text-white";
    return "bg-gray-400 text-white";
  };

  const statusHandler = async (newStatus, orderId) => {
    const confirm = window.confirm(`Change order status to "${newStatus}"?`);
    if (!confirm) return;

    setUpdatingId(orderId);
    try {
      const response = await axios.post(API_BASE + "/api/order/status", {
        orderId,
        status: newStatus,
      });

      if (response.data.success) {
        toast.success(response.data.message || "Status updated");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message || "Could not update status");
      }
    } catch (err) {
      console.error("statusHandler:", err);
      toast.error("Network error — could not update status");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="w-[100%] py-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <button
            onClick={fetchAllOrders}
            className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/10 transition"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white/6 rounded-2xl p-4 h-28"
              />
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-900/40 text-red-200 p-4 rounded mb-4">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="py-24 text-center text-gray-300">
            <img
              src={FALLBACK_IMAGE}
              alt="no orders"
              className="mx-auto w-48 h-48 opacity-70 rounded-lg"
            />
            <p className="mt-6">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white/6 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* left: icon + items summary */}
                  <div className="flex items-start gap-4 md:gap-6 w-full md:w-2/3">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-white/5 flex-shrink-0">
                      <img
                        src={
                          order.items?.[0]?.image ||
                          assets.parcel_icon ||
                          FALLBACK_IMAGE
                        }
                        alt="item"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-gray-200 mb-1">
                        <span className="font-semibold text-white">
                          Order ID:
                        </span>{" "}
                        <span className="text-gray-300">{order._id}</span>
                      </p>

                      <p className="text-sm text-gray-200">
                        {order.items
                          ?.map((it) => `${it.name} x ${it.quantity}`)
                          .join(" • ")}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleString()
                          : ""}
                      </p>
                    </div>
                  </div>

                  {/* right: amount, contact, status */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-amber-400">
                        ₹{order.amount}
                      </div>
                      <div className="text-xs text-gray-300">
                        Items: {order.items?.length || 0}
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status || "Unknown"}
                    </div>

                    <div className="flex flex-col gap-2">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          statusHandler(e.target.value, order._id)
                        }
                        disabled={updatingId === order._id}
                        className="bg-purple-400 text-sm rounded-md p-1 outline-none "
                      >
                        <option value="Food Processing">Food Processing</option>
                        <option value="Out for delivery">
                          Out for delivery
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
