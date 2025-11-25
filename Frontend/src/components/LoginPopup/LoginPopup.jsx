// import {  useContext, useState } from "react"
// import { assets } from "../../assets/assets"
// import { storeContex } from "../../Context/StoreContextProvider";
// import axios from "axios"

// function LoginPopup({ setShowLogin }) {

//   const {url,setToken,token}=useContext(storeContex)

//   const [currState, setcurrState] = useState("Login");
//   const [data,setData]=useState({
//     name:"",
//     email:"",
//     password:""
//   })
//   const onChangeHandler=(e)=>{
//     const name=e.target.name;
//     const value=e.target.value;
//     setData({
//       ...data,
//       [name]:value
//     })
//   }

//   const onLogin=async(e)=>{
//     e.preventDefault()
//     let newUrl=url;
//     if(currState==="Login"){
//       newUrl+="/api/user/login"
//     }else{
//       newUrl+="/api/user/register"
//     }
//     const response=await axios.post(newUrl,data)
//     if(response.data.success){
//       setToken(response.data.token);
//       localStorage.setItem("token",response.data.token)
//       setShowLogin(false)
//       // alert(response.data.message);
//     }
//     else{
//       alert(response.data.message)
//     }
//   }


//   return (
//     <>
//       <div className="absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid ">
//         <form
//           onSubmit={onLogin}
//           className="place-self-center w-[330px] text-[#808080] bg-white flex flex-col px-5 py-4 gap-3  rounded text-xl transition ease-in-out duration-300 "
//         >
//           <div className="flex justify-between items-center text-black ">
//             <h2>{currState}</h2>
//             <img
//               className="w-[16px] cursor-pointer "
//               src={assets.cross_icon}
//               onClick={() => setShowLogin(false)}
//               alt=""
//             />
//           </div>
//           <div className="flex flex-col gap-3 ">
//             {currState === "Login" ? (
//               <></>
//             ) : (
//               <input
//                 onChange={onChangeHandler}
//                 value={data.name}
//                 className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="Your name"
//               />
//             )}
//             <input
//               onChange={onChangeHandler}
//               value={data.email}
//               className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
//               type="email"
//               name="email"
//               required
//               placeholder="Your email"
//             />
//             <input
//               onChange={onChangeHandler}
//               value={data.password}
//               className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
//               type="text"
//               name="password"
//               required
//               placeholder=" Password"
//             />
//           </div>
//           <button type="submit" className=" border-none py-1.5 rounded bg-orange-600 text-2xl cursor-pointer text-white">
//             {currState === "Sign Up" ? "Create account" : "Login"}
//           </button>
//           <div className="flex text-[16px] items-start gap-4 mt-[15px]  ">
//             <input className="mt-2" type="checkbox" required />
//             <p>By continuing,i agree to the term of use and privacy</p>
//           </div>
//           {currState === "Login" ? (
//             <p className=" text-[16px]">
//               Create a new account?{" "}
//               <span
//                 className="text-orange-600 cursor-pointer font-semibold"
//                 onClick={() => setcurrState("Sign Up")}
//               >
//                 Click here{" "}
//               </span>
//             </p>
//           ) : (
//             <p className=" text-[16px]">
//               Already have an account?{" "}
//               <span
//                 className="text-orange-600 cursor-pointer font-semibold"
//                 onClick={() => setcurrState("Login")}
//               >
//                 Login here
//               </span>
//             </p>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }
// export default LoginPopup

// ***********  Updated Code  ***********

import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";

/**
 * LoginPopup - improved
 *
 * - Matches app theme (dark + amber accent)
 * - Show/hide password
 * - Loading & error states
 * - Close on overlay click or ESC
 * - Uses uploaded logo at: /mnt/data/b380fb2f-8957-4ada-adcf-9292f7dd3f7e.png
 */
function LoginPopup({ setShowLogin }) {
  const { url, setToken } = useContext(storeContex);

  const [mode, setMode] = useState("Login"); // "Login" | "Sign Up"
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // uploaded logo path (will be transformed to URL by your build)
  const logoUrl = "/mnt/data/b380fb2f-8957-4ada-adcf-9292f7dd3f7e.png";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowLogin(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setShowLogin]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setError("");
    // basic client validation
    if (!data.email || !data.password || (mode === "Sign Up" && !data.name)) {
      setError("Please fill required fields.");
      return;
    }

    setLoading(true);
    try {
      const endpoint =
        mode === "Login" ? "/api/user/login" : "/api/user/register";
      const response = await axios.post(url + endpoint, data);

      if (response?.data?.success) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        setShowLogin(false);
      } else {
        setError(response?.data?.message || "Authentication failed.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // close when clicking outside dialog
  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) setShowLogin(false);
  };

  return (
    <div
      ref={overlayRef}
      onClick={onOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-heading"
    >
      <form
        ref={dialogRef}
        onSubmit={onLogin}
        className="w-full max-w-md bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100 rounded-2xl p-6 shadow-2xl ring-1 ring-white/6"
      >
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src="./tastyhub1.png"
              alt="TastyHub"
              className="w-12 h-12 object-contain rounded-md bg-white/5 p-1"
              onError={(e) => {
                e.currentTarget.src = assets.logo || logoUrl;
              }}
            />
            <div>
              <h2 id="login-heading" className="text-lg font-bold">
                {mode === "Login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="text-sm text-gray-300">
                {mode === "Login"
                  ? "Sign in to continue to TastyHub"
                  : "Sign up to start ordering"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowLogin(false)}
            aria-label="Close"
            className="p-1 rounded hover:bg-white/5"
          >
            <img src={assets.cross_icon} alt="close" className="w-4 h-4" />
          </button>
        </header>

        {error && (
          <div className="mb-3 text-sm text-red-200 bg-red-900/30 p-2 rounded">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {mode === "Sign Up" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Full name"
              className="w-full rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-amber-400"
              required
            />
          )}

          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email"
            type="email"
            className="w-full rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-amber-400"
            required
          />

          <div className="relative">
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="w-full rounded-md px-3 py-2 bg-white/6 border border-white/8 placeholder:text-gray-300 outline-amber-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-300 px-2 py-1 hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" className="w-4 h-4 rounded bg-white/6" />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() =>
              setMode((m) => (m === "Login" ? "Sign Up" : "Login"))
            }
            className="text-sm text-amber-400 hover:underline"
          >
            {mode === "Login" ? "Create account" : "Already have an account?"}
          </button>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:brightness-95 transition disabled:opacity-60"
          >
            {loading
              ? mode === "Login"
                ? "Signing in..."
                : "Creating..."
              : mode === "Login"
              ? "Login"
              : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={() => {
              // guest quick demo login (optional)
              setData({
                email: "demo@user.com",
                password: "demopassword",
                name: "",
              });
            }}
            className="px-3 py-2 rounded-lg bg-white/6 text-white hover:bg-white/10 transition"
          >
            Demo
          </button>
        </div>

        <footer className="mt-4 text-sm text-gray-400">
          By continuing, you agree to our{" "}
          <span className="text-amber-400">Terms</span> and{" "}
          <span className="text-amber-400">Privacy Policy</span>.
        </footer>
      </form>
    </div>
  );
}

export default LoginPopup;
