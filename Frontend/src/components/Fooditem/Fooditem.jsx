
// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import { storeContex } from "../../Context/StoreContextProvider";

// const Fooditem=({id,name,price,description,image})=>{
//     const {cartItem,addToCart,removeFromCart,url}=useContext(storeContex);
    
//       // console.log(cartItem,id);
    
//     return (
//       <>
//         <div className="w-[100%] m-auto rounded-2xl shadow-orange-700 ">
//           <div className="relative">
//             <img
//               className=" relative rounded-t-2xl w-[100%] "
//               src={image}
//               // src={`${url}/image/` + image}
//               alt={name}
//             />
//             {/* {!cartItem ? ( */}
//              {!cartItem[id] ? (
//               <img
//                 className="absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-full"
//                 onClick={() => addToCart(id)}
//                 src={assets.add_icon_white}
//                 alt=""
//               />
//             ) : (
//               <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1 rounded-full bg-white cursor-pointer">
//                 <img
//                   className="w-[30px] "
//                   onClick={() => removeFromCart(id)}
//                   src={assets.remove_icon_red}
//                   alt=""
//                 />
//                 <p>{cartItem[id]}</p>
//                 <img
//                   onClick={() => addToCart(id)}
//                   src={assets.add_icon_green}
//                   alt=""
//                 />
//               </div>
//             )}
//           </div>
//           <div className="p-[5px] ">
//             <div className="flex justify-between items-center mb-[10px] ">
//               <p className="text-xl font-semibold">{name}</p>
//               {/* <img className="w-[60px] " src={assets.rating_starts} alt="" /> */}
//             </div>
//             <p className="text-[#6767676] text-[12px] ">{description}</p>
//             <p className="text-xl font-semibold text-orange-600 my-[10px] ">
//               ₹{price}
//             </p>
//           </div>
//         </div>
//       </>
//     );
// }
// export default Fooditem

// ***********************************



// import React, { useContext, useState } from "react";
// import { assets } from "../../assets/assets";
// import { storeContex } from "../../Context/StoreContextProvider";

// const Fooditem = ({ id, name, price, description, image }) => {
//   const { cartItem, addToCart, removeFromCart, url } = useContext(storeContex);

//   // console.log(cartItem,id);

//   return (
//     <>
//       <div
//         className="w-full m-auto rounded-2xl border border-gray-200 shadow-md 
//                 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white"
//       >
//         <div className="relative">
//           <img
//             className="rounded-t-2xl w-full h-48 object-cover"
//             src={image}
//             alt={name}
//           />

//           {/* Add to cart / Increment / Decrement */}
//           {!cartItem[id] ? (
//             <img
//               className="absolute w-[40px] bottom-4 right-4 cursor-pointer 
//                    rounded-full bg-orange-500 p-2 shadow-md hover:scale-110 transition"
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_white}
//               alt=""
//             />
//           ) : (
//             <div
//               className="absolute bottom-4 right-4 flex items-center gap-3 
//                       p-2 rounded-full bg-white shadow-md"
//             >
//               <img
//                 className="w-[28px] cursor-pointer hover:scale-110 transition"
//                 onClick={() => removeFromCart(id)}
//                 src={assets.remove_icon_red}
//                 alt=""
//               />
//               <p className="font-semibold">{cartItem[id]}</p>
//               <img
//                 className="w-[28px] cursor-pointer hover:scale-110 transition"
//                 onClick={() => addToCart(id)}
//                 src={assets.add_icon_green}
//                 alt=""
//               />
//             </div>
//           )}
//         </div>

//         <div className="p-4">
//           <div className="flex justify-between items-center mb-2">
//             <p className="text-lg font-semibold">{name}</p>
//           </div>

//           <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

//           <p className="text-xl font-semibold text-orange-600 mt-3">₹{price}</p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Fooditem;

// ***************************************


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

