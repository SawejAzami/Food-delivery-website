import React, { useContext, useState } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const EmailVerify = () => {
  const navigate = useNavigate();
  const { url } = useContext(storeContex);
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setEmail(value)
  };

  const verify = async (e) => {
    e.preventDefault();
    // console.log(data)
    let response;
    try {
      response = await axios.post(`${url}/api/user/emailVerify`, {email});
    
      toast.success(response.data.message);
    } catch (error) {
      // console.log(response);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
 

  return (
    <div className="w-[100%] flex justify-center items-center gap-2 bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-gray-100   p-6 shadow-2xl ring-1 ring-white/6">
     
        <div className="w-[50%] flex flex-col items-center justify-center gap-4  p-10 rounded-3xl shadow-2xl ring-1 ring-black/10  ">
          <form action="" onSubmit={verify} className="w-full">
            <input
              name="email"
              value={email}
              onChange={onChangeHandler}
              placeholder="Enter your email"
              className="w-full mb-5 rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-none"
              required
            />
            <button
              type="submit"
              className="p-2 rounded-2xl bg-indigo-800 hover:bg-indigo-500 cursor-pointer"
            >
              Send Email
            </button>
          </form>
        </div>
      
      
    </div>
  );
};

export default EmailVerify;
