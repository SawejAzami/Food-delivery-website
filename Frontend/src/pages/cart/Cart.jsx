// import React, { useContext } from "react";
// import { storeContex } from "../../Context/StoreContextProvider";
// import { food_list } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const navigate = useNavigate();

//   const { cartItem, food_list, url, removeFromCart, getCartTotalAmount } =
//     useContext(storeContex);

//   return (
//     <>
//       <div className="mt-[100px] w-[80%] place-self-center">
//         <div className="cart-item">
//           <div className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] text-gray-600 text-center text-xl ">
//             <p>Item</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//           </div>
//           <br />
//           <hr />
//           {food_list.map((item, index) => {
//             if (cartItem[item._id] > 0) {
//               return (
//                 <div key={index}>
//                   <div
//                     key={item._id}
//                     className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] text-black text-center my-[10px] rounded-2xl"
//                   >
//                     <img
//                       className="w-[50px]"
//                       src={item.image}
//                       alt=""
//                     />
//                     <p>{item.name}</p>
//                     <p>₹{item.price}</p>
//                     <p>{cartItem[item._id]}</p>
//                     <p>₹{item.price * cartItem[item._id]}</p>
//                     <p
//                       className="cursor-pointer"
//                       onClick={() => removeFromCart(item._id)}
//                     >
//                       x
//                     </p>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             }
//           })}
//         </div>
//         <div className="mt-[80px] flex justify-between gap-[20px] ">
//           <div className="flex flex-1 flex-col gap-[20px]">
//             <h2>Cart Totals</h2>
//             <div>
//               <div className="flex justify-between text-[#555]">
//                 <p>subtotal</p>
//                 <p>₹{getCartTotalAmount()}</p>
//               </div>
//               <hr />
//               <div className="flex justify-between text-[#555]">
//                 <p>Delivery Fee</p>
//                 <p>₹{getCartTotalAmount() === 0 ? 0 : 50}</p>
//               </div>
//               <hr />
//               <div className="flex justify-between text-[#555]">
//                 <p>Total</p>
//                 <p>
//                   ₹{getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 50}
//                 </p>
//               </div>
//             </div>
//             <button
//               className="border-none text-white bg-orange-600 py-[12px] rounded cursor-pointer "
//               onClick={() => navigate("/order")}
//             >
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//           <div className=" text-[#555] ">
//             <div>
//               <div>
//                 <p>If you have a promo code,Enter it here</p>
//                 <div
//                   className="mt-[10px] flex justify-between items-center bg-[#eaeaea]
//                             rounded-2xl"
//                 >
//                   <input
//                     className="bg-transparent border-none outline-none pl-[10px] "
//                     type="text"
//                     placeholder="promo code"
//                     name=""
//                     id=""
//                   />
//                   <button
//                     className="w-10vw px-[12px] py-[5px]
//                                 bg-black border-none text-white "
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Cart;


// ***************************


import React, { useContext } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cartItem, food_list, removeFromCart, getCartTotalAmount } =
    useContext(storeContex);

  return (
    <div
      className="w-full min-h-screen py-20 px-6 
      bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100"
    >
      <div className="w-[80%] mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {/* Cart Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-6 text-gray-300 font-semibold border-b border-white/20 pb-3 text-center">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart Items */}
          {food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-6 text-center items-center py-4 border-b border-white/10">
                    <img
                      className="w-[50px] mx-auto rounded-lg"
                      src={item.image}
                      alt=""
                    />
                    <p className="text-white">{item.name}</p>
                    <p className="text-amber-400 font-semibold">
                      ₹{item.price}
                    </p>
                    <p>{cartItem[item._id]}</p>
                    <p className="text-amber-400 font-semibold">
                      ₹{item.price * cartItem[item._id]}
                    </p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-400 hover:text-red-300 font-bold text-xl"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Totals + Promo */}
        <div className="mt-16 flex flex-col md:flex-row gap-10">
          {/* Totals Section */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-gray-200">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <p>Subtotal</p>
                <p>₹{getCartTotalAmount()}</p>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-2">
                <p>Delivery Fee</p>
                <p>₹{getCartTotalAmount() === 0 ? 0 : 50}</p>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <p>Total</p>
                <p>
                  ₹{getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 50}
                </p>
              </div>
            </div>

            <button
              className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-slate-900 font-bold hover:brightness-95 transition"
              onClick={() => navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* Promo Section */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-gray-200 w-full md:w-80">
            <p className="font-semibold">Have a promo code?</p>

            <div className="flex mt-4 bg-white/10 rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 outline-none"
              />
              <button className="bg-amber-400 text-slate-900 px-4 font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
