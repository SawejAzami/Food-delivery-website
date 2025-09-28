import React, { useContext } from "react"
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
function PlaceOrder(){
    const {
      getCartTotalAmount,
      token,
      food_list,
      url,
      cartItem,
    } = useContext(storeContex);
    const [data,setData]=useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:"",
    })
    const onChangeHadler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(data=>({
        ...data,
        [name]:value
      }))
    }
    const navigate=useNavigate();
    useEffect(()=>{
      if(!token){
        navigate('/cart')
      }
      else if(getCartTotalAmount()==0){
        navigate('/cart')
      }
    },[token])
    const placeOrder=async(e)=>{
      e.preventDefault();
      let orderItem=[];
      food_list.map((item)=>{
        if(cartItem[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"]=cartItem[item._id];
          orderItem.push(itemInfo);
        }
      })
      let orderData={
        address:data,
        item:orderItem,
        amount:getCartTotalAmount()+2,
      }
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      // console.log(response)
      if(response.data.success){
        // const {session_url}=response.data;
        // window.location.replace(session_url);
        // console.log(response)
      }else{
        
        alert("Error in Order placing");
      }
    }


    return (
      <>
        <div className="">
          <form onSubmit={placeOrder} className="px-10 flex   justify-between  mt-[100px] " action="">
            <div className="w-[100%] max-w-[50%] ">
              <p className="text-2xl font-bold ">Delivery Information</p>
              <div className="flex gap-5">
                <input
                  required
                  name="firstName"
                  onChange={onChangeHadler}
                  value={data.firstName}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="First name"
                />
                <input
                required
                  name="lastName"
                  onChange={onChangeHadler}
                  value={data.lastName}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="Last  name"
                />
              </div>
              <input
              required
                name="email"
                onChange={onChangeHadler}
                value={data.email}
                className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                type="email"
                placeholder="Email address"
              />
              <input
              required
                name="street"
                onChange={onChangeHadler}
                value={data.street}
                className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                type="text"
                placeholder="Street"
              />
              <div className="flex gap-5">
                <input
                required
                  name="city"
                  onChange={onChangeHadler}
                  value={data.city}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="City"
                />
                <input
                required
                  name="state"
                  onChange={onChangeHadler}
                  value={data.state}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="state"
                />
              </div>
              <div className="flex gap-5">
                <input
                required
                  name="zipcode"
                  onChange={onChangeHadler}
                  value={data.zipcode}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="Zip code"
                />
                <input
                required
                  name="country"
                  onChange={onChangeHadler}
                  value={data.country}
                  className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                  type="text"
                  placeholder="Country"
                />
              </div>
              <input
              required
                name="phone"
                onChange={onChangeHadler}
                value={data.phone}
                className="mt-[15px] w-[100%] p-2 border-1 rounded border-[#c5c5c5] outline-orange-600 "
                type="text"
                placeholder="Phone"
              />
            </div>

            <div className=" w-[100%] px-10 ">
              <div className="flex flex-1 flex-col gap-[20px]">
                <h2>Cart Totals</h2>
                <div>
                  <div className="flex justify-between text-[#555]">
                    <p>subtotal</p>
                    <p>${getCartTotalAmount()}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between text-[#040101]">
                    <p>Delivery Fee</p>
                    <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between text-[#555]">
                    <p>Total</p>
                    <p>
                      $
                      {getCartTotalAmount() === 0
                        ? 0
                        : getCartTotalAmount() + 2}
                    </p>
                  </div>
                </div>
                <button 
                type="submit"
                className="border-none text-white bg-orange-600 py-[12px] rounded cursor-pointer  ">
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}
export default PlaceOrder;