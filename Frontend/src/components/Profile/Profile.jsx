


import React, { useContext, useState } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const { url } = useContext(storeContex);
  // const [email,setEmail]=useState("");
  const [data, setData] = useState({ OTP: "", email: "", password: "" });
  const [token, setToken] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const verify=async(e)=>{
    e.preventDefault()
    // console.log(data)
    let response;
    try {
     response = await axios.post(`${url}/api/user/generateotp`, data);
    //  console.log("OTP response",response)
     setToken(response.data.token)
    //  console.log(token,"  token")
      toast.success(response.data.message)
    } catch (error) {
     toast.error(error.response?.data?.message || "Something went wrong");
    }
  }
  const changePassword = async (e) => {
    e.preventDefault();
    // console.log(data);
    let response;
    try {
      response = await axios.post(`${url}/api/user/changepassword`, data);
      console.log("password response", response);
      if(response.data.success){
        navigate("/")
      }
      toast.success(response.data.message);
    } catch (error) {
     toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-[100%] flex justify-center items-center gap-2 bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-gray-100   p-6 shadow-2xl ring-1 ring-white/6">
      {!token && (
        <div className="w-[50%] flex flex-col items-center justify-center gap-4  p-10 rounded-3xl shadow-2xl ring-1 ring-black/10  ">
          <form action="" onSubmit={verify} className="w-full">
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              placeholder="Enter your email"
              className="w-full mb-5 rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-none"
              required
            />
            <button
              type="submit"
              className="p-2 rounded-2xl bg-indigo-800 hover:bg-indigo-500 cursor-pointer"
            >
              Generate OTP
            </button>
          </form>
        </div>
      )}
      {token && (
        <div className="flex flex-col items-center justify-center gap-4  p-10 rounded-3xl shadow-2xl ring-1 ring-black/10 ">
          <form action="" onSubmit={changePassword}>
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              placeholder="Enter your email"
              className="w-full mb-5 rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              placeholder="Enter your Password"
              className="w-full rounded-md px-3 py-2 mb-5 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-none"
              required
            />
            <input
              name="OTP"
              value={data.OTP}
              onChange={onChangeHandler}
              placeholder="Enter OTP"
              className="w-full rounded-md mb-5 px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-none"
              required
            />
            <button type="submit" className="p-2 rounded-2xl bg-indigo-800">
              Change Password
            </button>
          </form>
        </div>
      )}
    </div>
  );

    
}   

export default Profile; 