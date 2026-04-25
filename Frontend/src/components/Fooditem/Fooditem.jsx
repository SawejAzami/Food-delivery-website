

import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { storeContex } from "../../Context/StoreContextProvider";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart, url } = useContext(storeContex);

  // console.log(cartItem,id);

  return (
    <>
      <div
        className="
    w-[250px] m-auto rounded-2xl border border-white/10 
    shadow-md hover:shadow-xl hover:scale-[1.02] 
    transition-all duration-300 
    bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800
    text-gray-100
  "
      >
        <div className="relative  ">
          <img
            className="rounded-t-2xl w-full h-48 object-cover"
            src={image}
            alt={name}
          />

          {/* Add to cart / Increment / Decrement */}
          {!cartItem[id] ? (
            <img
              className="absolute w-[40px] bottom-4 right-4 cursor-pointer 
                   rounded-full bg-amber-400 p-2 shadow-md hover:scale-110 transition"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div
              className="absolute bottom-4 right-4 flex items-center gap-3 
                    p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-md"
            >
              <img
                className="w-[28px] cursor-pointer hover:scale-110 transition"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p className="font-semibold text-white">{cartItem[id]}</p>
              <img
                className="w-[28px] cursor-pointer hover:scale-110 transition"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold text-white">{name}</p>
          </div>

          <p className="text-gray-300 text-sm line-clamp-2">{description}</p>

          <p className="text-xl font-semibold text-amber-400 mt-3">₹{price}</p>
        </div>
      </div>
    </>
  );
};
export default Fooditem;

// ***************************************

