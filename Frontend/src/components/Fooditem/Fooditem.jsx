
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { storeContex } from "../../Context/StoreContextProvider";

const Fooditem=({id,name,price,description,image})=>{
    const {cartItem,addToCart,removeFromCart,url}=useContext(storeContex);
    return (
      <>
        <div className="w-[100%] m-auto rounded-2xl shadow-orange-700 ">
          <div className="relative">
            <img
              className=" relative rounded-t-2xl w-[100%] "
              src={`${url}/image/` + image}
              alt={name}
            />
            {!cartItem[id] ? (
              <img
                className="absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-full"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
                alt=""
              />
            ) : (
              <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1 rounded-full bg-white cursor-pointer">
                <img
                  className="w-[30px] "
                  onClick={() => removeFromCart(id)}
                  src={assets.remove_icon_red}
                  alt=""
                />
                <p>{cartItem[id]}</p>
                <img
                  onClick={() => addToCart(id)}
                  src={assets.add_icon_green}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="p-[5px] ">
            <div className="flex justify-between items-center mb-[10px] ">
              <p className="text-xl font-semibold">{name}</p>
              <img className="w-[60px] " src={assets.rating_starts} alt="" />
            </div>
            <p className="text-[#6767676] text-[12px] ">{description}</p>
            <p className="text-xl font-semibold text-orange-600 my-[10px] ">
              ${price}
            </p>
          </div>
        </div>
      </>
    );
}
export default Fooditem