import React, { useContext } from "react";
import "../HangingCard/Hanging.css";
import { storeContex } from "../../Context/StoreContextProvider";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

const HangingCard = () => {
  const { numberOfOrders,url } = useContext(storeContex);
  const [couponLength,setCouponLength]=useState(0)
  const [oldCoupon, setOldCoupon] = useState();
  const [newCoupon,setNewCoupon]=useState()
  async function fetchCoupon() {
    const response = await axios.get(`${url}/api/coupon/get`);
    // console.log(response.data.coupon)
    setCouponLength(response.data.coupon.length);
    if(response.data.coupon[0].category==="old"){
        setOldCoupon(response.data.coupon[0]);
        setNewCoupon(response.data.coupon[1]);
    }else{
        setOldCoupon(response.data.coupon[1]);
        setNewCoupon(response.data.coupon[0]);
    }

  }
  useEffect(()=>{
    fetchCoupon();
  },[])

  return (
    <>
      {couponLength>0 && (
        <div className="flex flex-col items-center">
          {/* Rope */}
          <div className="w-[2px] h-6 bg-amber-900"></div>

          {/* Pin */}
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-amber-900 shadow-md z-2"></div>

          {/* Card */}
          <div
            className="relative -mt-2 w-55 rounded-xl shadow-2xl
                      bg-gradient-to-br from-orange-400 via-red-400 to-pink-400
                      text-white
                      p-4
                      flex flex-col items-center
                      animate-[swing_3s_ease-in-out_infinite]
                      transition-all duration-300
                      hover:scale-105"
          >
            {/* Decorative dashed border */}
            <div className="absolute inset-2 border-2 border-dashed border-white/60 rounded-lg"></div>

            {/* Badge */}
            <div className="bg-white text-red-500 text-xs font-bold p-1 rounded-full  shadow">
              LIMITED OFFER
            </div>

            <h2 className="text-sm font-semibold tracking-wide">
              Use This Code
            </h2>

            {/* Coupon Code */}
            <div className="bg-white text-red-500 font-bold text-xl px-3 py-1 rounded-md mt-1 shadow-md">
              {numberOfOrders == 0
                ? newCoupon != undefined
                  ? newCoupon.code
                  : oldCoupon.code
                : 0}
            </div>

            <p className="text-sm opacity-90">
              Get{" "}
              <span className="font-bold">
                {numberOfOrders == 0
                  ? newCoupon != undefined
                    ? newCoupon.discount
                    : oldCoupon.discount
                  : 0}
                % OFF
              </span>
              on your order
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HangingCard;
