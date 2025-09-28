import {  useContext, useState } from "react"
import { assets } from "../../assets/assets"
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios"

function LoginPopup({ setShowLogin }) {

  const {url,setToken,token}=useContext(storeContex)

  const [currState, setcurrState] = useState("Login");
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({
      ...data,
      [name]:value
    })
  }

  const onLogin=async(e)=>{
    e.preventDefault()
    let newUrl=url;
    if(currState==="Login"){
      newUrl+="/api/user/login"
    }else{
      newUrl+="/api/user/register"
    }
    const response=await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
      // alert(response.data.message);
    }
    else{
      alert(response.data.message)
    }
  }


  return (
    <>
      <div className="absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid ">
        <form
          onSubmit={onLogin}
          className="place-self-center w-[330px] text-[#808080] bg-white flex flex-col px-5 py-4 gap-3  rounded text-xl transition ease-in-out duration-300 "
        >
          <div className="flex justify-between items-center text-black ">
            <h2>{currState}</h2>
            <img
              className="w-[16px] cursor-pointer "
              src={assets.cross_icon}
              onClick={() => setShowLogin(false)}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 ">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                onChange={onChangeHandler}
                value={data.name}
                className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            )}
            <input
              onChange={onChangeHandler}
              value={data.email}
              className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
              type="email"
              name="email"
              required
              placeholder="Your email"
            />
            <input
              onChange={onChangeHandler}
              value={data.password}
              className="outline-none border-2 border-[#c9c9c9] p-1 rounded"
              type="text"
              name="password"
              required
              placeholder=" Password"
            />
          </div>
          <button type="submit" className=" border-none py-1.5 rounded bg-orange-600 text-2xl cursor-pointer text-white">
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="flex text-[16px] items-start gap-4 mt-[15px]  ">
            <input className="mt-2" type="checkbox" required />
            <p>By continuing,i agree to the term of use and privacy</p>
          </div>
          {currState === "Login" ? (
            <p className=" text-[16px]">
              Create a new account?{" "}
              <span
                className="text-orange-600 cursor-pointer font-semibold"
                onClick={() => setcurrState("Sign Up")}
              >
                Click here{" "}
              </span>
            </p>
          ) : (
            <p className=" text-[16px]">
              Already have an account?{" "}
              <span
                className="text-orange-600 cursor-pointer font-semibold"
                onClick={() => setcurrState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}
export default LoginPopup