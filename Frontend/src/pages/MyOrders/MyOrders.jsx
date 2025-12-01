// import React from "react";
// import { useContext } from "react";
// import { useState } from "react";
// import { storeContex } from "../../Context/StoreContextProvider";
// import axios from "axios";
// import { useEffect } from "react";
// import { assets } from "../../assets/assets";

// const MyOrders = () => {
//   const { url, token } = useContext(storeContex);
//   const [data, setData] = useState([]);

//   const fetchOrders = async () => {
//     const response = await axios.post(
//       url + "/api/order/userOrders",
//       {},
//       { headers: { token } }
//     );
//     setData(response.data.data);
//     // console.log(response.data.data[0], "response");
//   };
//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     }
//     // console.log(data)
//   }, [token]);
//   return (
//     <>
//       <div className="my-[50px] mx-[100px] ">
//         <h2>My Orders</h2>
//         <div className="flex flex-col gap-[20px] mt-[30px] ">
//           {data.map((order, index) => {
//             return (
//               <div
//                 key={index}
//                 className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border border-orange-500 "
//               >
//                 <img className="w-[50px]" src={assets.parcel_icon} alt="" />
//                 <p>
//                   {order.items.map((item, index) => {
//                     if (index === order.items.length - 1) {
//                       return item.name + " x " + item.quantity;
//                     } else {
//                       return item.name + " x " + item.quantity + ",";
//                     }
//                   })}
//                 </p>
//                 <p>₹{order.amount}.00</p>
//                 <p>Items:{order.items.length}</p>
//                 <p>
//                   <span className="text-orange-600">&#x25cf;</span>
//                   <b className="text-[#454545] font-medium">{order.status}</b>
//                 </p>
//                 <button
//                   className=" border p-1 cursor-pointer"
//                   onClick={fetchOrders}
//                 >
//                   Track Order
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
// export default MyOrders;

// ***********************************


import React, { useContext, useEffect, useState } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { assets } from "../../assets/assets";


const MyOrders = () => {
  const { url, token } = useContext(storeContex);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fallbackImage = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  const fetchOrders = async () => {
    if (!token) {
      setOrders([]);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        url + "/api/order/userOrders",
        {},
        { headers: { token } }
      );
      setOrders(response?.data?.data || []);
    } catch (err) {
      console.error("fetchOrders:", err);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const statusColor = (status) => {
    const s = String(status).toLowerCase();
    if (s.includes("delivered")) return "bg-emerald-500";
    if (
      s.includes("shipped") ||
      s.includes("on the way") ||
      s.includes("dispatched")
    )
      return "bg-amber-500";
    if (s.includes("cancel") || s.includes("failed") || s.includes("rejected"))
      return "bg-red-500";
    return "bg-sky-500";
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

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
          <div className="flex flex-col items-center justify-center py-24">
            <img
              src={fallbackImage}
              alt="no orders"
              className="w-48 h-48 opacity-70 rounded-lg"
            />
            <p className="mt-6 text-gray-300">You have no orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white/6 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/10"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  {/* Left: Icon + Items summary */}
                  <div className="flex items-start gap-4 md:gap-6 w-full md:w-2/3">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-white/5 flex-shrink-0">
                      {/* show first item's image if available */}
                      <img
                        src={
                          order.items?.[0]?.image ||
                          assets.parcel_icon 
                        }
                        alt="order item"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.src = fallbackImage)}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-gray-300 mb-1">
                        <span className="font-semibold text-white">
                          Order ID:
                        </span>{" "}
                        <span className="text-gray-300">{order._id}</span>
                      </p>

                      <p className="text-sm text-gray-200">
                        {order.items
                          .map((it) => `${it.name} x ${it.quantity}`)
                          .join(" • ")}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        Placed:{" "}
                        {order.createdAt
                          ? new Date(order.createdAt).toLocaleString()
                          : "—"}
                      </p>
                    </div>
                  </div>

                  {/* Right: amount, status, actions */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-amber-400">
                        ₹{order.amount}
                      </div>
                      <div className="text-xs text-gray-400">
                        Items: {order.items?.length || 0}
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs text-white ${statusColor(
                        order.status
                      )}`}
                    >
                      {order.status || "Unknown"}
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => fetchOrders()}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm"
                      >
                        Track Order
                      </button>
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
};

export default MyOrders;
