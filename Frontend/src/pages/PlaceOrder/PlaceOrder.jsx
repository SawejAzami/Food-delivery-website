// import React, { useContext } from "react"
// import { storeContex } from "../../Context/StoreContextProvider";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import {useNavigate} from "react-router-dom"
// function PlaceOrder(){
//     const {
//       getCartTotalAmount,
//       token,
//       food_list,
//       url,
//       cartItem,
//     } = useContext(storeContex);
//     const [data,setData]=useState({
//       firstName:"",
//       lastName:"",
//       email:"",
//       street:"",
//       city:"",
//       state:"",
//       zipcode:"",
//       country:"",
//       phone:"",
//     })
//     const onChangeHadler=(e)=>{
//       const name=e.target.name;
//       const value=e.target.value;
//       setData(data=>({
//         ...data,
//         [name]:value
//       }))
//     }
   
//     const navigate=useNavigate();
//      function goToOrder(response) {
//       if (response.data.success) {
//         navigate("/myorders");
//       }
//     }
//     useEffect(()=>{
//       if(!token){
//         navigate('/cart')
//       }
//       else if(getCartTotalAmount()==0){
//         navigate('/cart')
//       }
//     },[token])
//     const placeOrder=async(e)=>{
//       e.preventDefault();
//       let orderItem=[];
//       food_list.map((item)=>{
//         if(cartItem[item._id]>0){
//           let itemInfo=item;
//           itemInfo["quantity"]=cartItem[item._id];
//           orderItem.push(itemInfo);
//         }
//       })
//       let orderData={
//         address:data,
//         item:orderItem,
//         amount:getCartTotalAmount()+2,
//       }
//       let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
//       // console.log(response)
//       if(response.data.success){
//         // const {session_url}=response.data;
//         // window.location.replace(session_url);
//         // console.log(response)
//           goToOrder(response)
//       }else{
//           alert("Error in Order placing");
//       }
//     }


//     return (
//       <>
//         <div className="">
//           <form
//             onSubmit={placeOrder}
//             className="px-10 flex   justify-between  mt-[100px] "
//             action=""
//           >
//             <div className="w-[100%] max-w-[50%] ">
//               <p className="text-2xl font-bold ">Delivery Information</p>
//               <div className="flex gap-5">
//                 <input
//                   required
//                   name="firstName"
//                   onChange={onChangeHadler}
//                   value={data.firstName}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="First name"
//                 />
//                 <input
//                   required
//                   name="lastName"
//                   onChange={onChangeHadler}
//                   value={data.lastName}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="Last  name"
//                 />
//               </div>
//               <input
//                 required
//                 name="email"
//                 onChange={onChangeHadler}
//                 value={data.email}
//                 className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                 type="email"
//                 placeholder="Email address"
//               />
//               <input
//                 required
//                 name="street"
//                 onChange={onChangeHadler}
//                 value={data.street}
//                 className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                 type="text"
//                 placeholder="Street"
//               />
//               <div className="flex gap-5">
//                 <input
//                   required
//                   name="city"
//                   onChange={onChangeHadler}
//                   value={data.city}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="City"
//                 />
//                 <input
//                   required
//                   name="state"
//                   onChange={onChangeHadler}
//                   value={data.state}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="state"
//                 />
//               </div>
//               <div className="flex gap-5">
//                 <input
//                   required
//                   name="zipcode"
//                   onChange={onChangeHadler}
//                   value={data.zipcode}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="Zip code"
//                 />
//                 <input
//                   required
//                   name="country"
//                   onChange={onChangeHadler}
//                   value={data.country}
//                   className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                   type="text"
//                   placeholder="Country"
//                 />
//               </div>
//               <input
//                 required
//                 name="phone"
//                 onChange={onChangeHadler}
//                 value={data.phone}
//                 className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
//                 type="text"
//                 placeholder="Phone"
//               />
//             </div>

//             <div className=" w-[100%] px-10 ">
//               <div className="flex flex-1 flex-col gap-[20px]">
//                 <h2>Cart Totals</h2>
//                 <div>
//                   <div className="flex justify-between text-[#555]">
//                     <p>subtotal</p>
//                     <p>₹{getCartTotalAmount()}</p>
//                   </div>
//                   <hr />
//                   <div className="flex justify-between text-[#040101]">
//                     <p>Delivery Fee</p>
//                     <p>₹{getCartTotalAmount() === 0 ? 0 : 50}</p>
//                   </div>
//                   <hr />
//                   <div className="flex justify-between text-[#555]">
//                     <p>Total</p>
//                     <p>
//                       ₹
//                       {getCartTotalAmount() === 0
//                         ? 0
//                         : getCartTotalAmount() + 50}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="border-none text-white bg-orange-600 py-[12px] rounded cursor-pointer  "
//                 >
//                   PROCEED TO PAYMENT
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </>
//     );
// }
// export default PlaceOrder;


// ***************************


import React, { useContext, useEffect, useState } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * PlaceOrder - improved
 *
 * Notes:
 *  - Uses fallback image path: /mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png
 *  - Keeps existing store context usage (cartItem, food_list, token, etc.)
 */
function PlaceOrder() {
  const {
    getCartTotalAmount,
    token,
    food_list,
    url,
    cartItem,
    addToCart,
    removeFromCart,
  } = useContext(storeContex);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fallbackImage = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  useEffect(() => {
    // redirect to cart if not logged in or empty cart
    if (!token) {
      navigate("/cart");
    } else if (getCartTotalAmount() === 0) {
      navigate("/cart");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((d) => ({
      ...d,
      [name]: value,
    }));
  };

  const buildOrderItems = () => {
    const items = [];
    food_list.forEach((item) => {
      const qty = cartItem[item._id] || 0;
      if (qty > 0) {
        items.push({
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.image || fallbackImage,
          quantity: qty,
        });
      }
    });
    return items;
  };

  const isFormValid = () => {
    // simple validation: required fields non-empty
    const required = [
      "firstName",
      "lastName",
      "email",
      "street",
      "city",
      "state",
      "zipcode",
      "country",
      "phone",
    ];
    return required.every((k) => data[k] && data[k].toString().trim() !== "");
  };

  async function goToOrder(response) {
    if (response?.data?.success) {
      navigate("/myorders");
    }
  }

  const placeOrder = async (e) => {
    e.preventDefault();
    setError("");
    if (!isFormValid()) {
      setError("Please fill all required fields.");
      return;
    }

    const items = buildOrderItems();
    if (!items.length) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        address: data,
        item: items,
        amount: getCartTotalAmount() + 50, // using 50 as delivery fee
      };

      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        goToOrder(response);
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const subtotal = getCartTotalAmount();
  const deliveryFee = subtotal === 0 ? 0 : 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: form */}
          <form
            onSubmit={placeOrder}
            className="lg:col-span-2 bg-white/6 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>

            {error && (
              <div className="mb-4 text-sm text-red-200 bg-red-900/30 p-3 rounded">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                onChange={onChangeHandler}
                value={data.firstName}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="First name"
              />
              <input
                required
                name="lastName"
                onChange={onChangeHandler}
                value={data.lastName}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="Last name"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="email"
                placeholder="Email address"
              />
              <input
                required
                name="phone"
                onChange={onChangeHandler}
                value={data.phone}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="Phone"
              />
            </div>

            <div className="mt-4">
              <input
                required
                name="street"
                onChange={onChangeHandler}
                value={data.street}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400 w-full"
                type="text"
                placeholder="Street address"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                required
                name="city"
                onChange={onChangeHandler}
                value={data.city}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="City"
              />
              <input
                required
                name="state"
                onChange={onChangeHandler}
                value={data.state}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="State"
              />
              <input
                required
                name="zipcode"
                onChange={onChangeHandler}
                value={data.zipcode}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400"
                type="text"
                placeholder="Zip code"
              />
            </div>

            <div className="mt-4">
              <input
                required
                name="country"
                onChange={onChangeHandler}
                value={data.country}
                className="p-2 rounded border border-white/10 bg-transparent outline-amber-400 w-full"
                type="text"
                placeholder="Country"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                disabled={!isFormValid() || loading}
                className="px-6 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:brightness-95 transition disabled:opacity-60"
              >
                {loading ? "Placing order..." : "Proceed to Payment"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="px-4 py-2 rounded-lg bg-white/6 text-white hover:bg-white/10 transition"
              >
                Back to Cart
              </button>
            </div>
          </form>

          {/* RIGHT: order summary */}
          <aside className="bg-white/6 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-4 max-h-[60vh] overflow-auto pr-2">
              {buildOrderItems().map((it) => (
                <div key={it._id} className="flex items-center gap-3">
                  <img
                    src={it.image || fallbackImage}
                    alt={it.name}
                    className="w-16 h-16 object-cover rounded-md"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-white">{it.name}</p>
                        <p className="text-sm text-gray-300">
                          Qty: {it.quantity}
                        </p>
                      </div>
                      <div className="text-amber-400 font-semibold">
                        ₹{it.price * it.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {buildOrderItems().length === 0 && (
                <div className="text-sm text-gray-300">Your cart is empty.</div>
              )}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 space-y-3 text-gray-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-white font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
