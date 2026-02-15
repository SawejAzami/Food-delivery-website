import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios"

export const storeContex=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({})
    // const url="http://localhost:4000"
    const url = "https://food-delivery-website-backend-2q5v.onrender.com";
    const [token,setToken]=useState("")
    const [food_list,setFood_list]=useState([])
    const addToCart=async(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        
        if(token){
          await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart=async(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
          await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getCartTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=food_list?.find((product)=>product._id.toString()===item.toString());
                if(itemInfo){
                  totalAmount += itemInfo?.price * cartItem[item];
                }
            }
        }
        return totalAmount
    }

    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list")
        setFood_list(response.data.data)
        
    }
    const loadCartData=async(token)=>{
      const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
      setCartItem(response.data.cartData || {})
    }
    useEffect(()=>{
        async function loadData() {
          if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
           await loadCartData(localStorage.getItem("token"))
          }
          await fetchFoodList();
        }
        loadData()
    },[])

    const contextValue = {
      food_list,
      cartItem,
      setCartItem,
      addToCart,
      removeFromCart,
      getCartTotalAmount,
      url,
      token,
      setToken,
    };
    return (
      <storeContex.Provider value={contextValue}>
        {props.children}
      </storeContex.Provider>
    );
}

export default StoreContextProvider