import React, { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import './Navbar.css'
import {Link, useNavigate} from "react-router-dom"
import { storeContex } from "../../Context/StoreContextProvider";

function Navbar({setShowLogin}){

    const { getCartTotalAmount ,token,setToken} = useContext(storeContex);

    const hover =
      "flex flex-col gap-[10px] bg-[#fff2ef] px-[25px] py-[12px] border border-orange-500  outline-2 list-none ";

    const [active, setActive] = useState("Home");

    const navigate=useNavigate()
    const logout=async()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }

    return (
      <>
        <div className="flex w-[80%] m-auto justify-between items-center mt-8">
          <img className="w-[150px]" src={assets.logo} alt="Logo name" />

          <ul className="flex gap-3 ">
            {/* {links.map((link) => (
              <Link
                key={link}
                onClick={() => setActive(link)}
                className={`cursor-pointer pb-1 ${
                  active === link
                    ? "underline underline-offset-4 decoration-2 decoration-blue-600"
                    : ""
                }`}
              >
                {link}
              </Link>

            ))} */}

            <Link
              to="/"
              onClick={() => setActive("Home")}
              className={
                active === "Home"
                  ? "underline underline-offset-4 decoration-2 decoration-blue-600"
                  : ""
              }
            >
              Home
            </Link>
            <a
              href="#menu"
              onClick={() => setActive("Menu")}
              className={
                active === "Menu"
                  ? "underline underline-offset-4 decoration-2 decoration-blue-600"
                  : ""
              }
            >
              Menu
            </a>
            <a
              href="#contact"
              onClick={() => setActive("Contact")}
              className={
                active === "Contact"
                  ? "underline underline-offset-4 decoration-2 decoration-blue-600"
                  : ""
              }
            >
              Contact
            </a>
            <a
              href="#mobile-app"
              onClick={() => setActive("Mobile-App")}
              className={
                active === "Mobile-App"
                  ? "underline underline-offset-4 decoration-2 decoration-blue-600"
                  : ""
              }
            >
              Mobile-App
            </a>
          </ul>
          <div className="flex justify-center items-center gap-5">
            <img src={assets.search_icon} alt="" />
            <div className="relative">
              <Link to="/cart">
                <img
                  onClick={() => setActive("")}
                  src={assets.basket_icon}
                  alt=""
                />
              </Link>
              <div
                className={
                  getCartTotalAmount() === 0
                    ? " "
                    : "absolute w-3 h-3  bg-orange-800 rounded-full top-[-8px] right-[-8px]"
                }
              ></div>
            </div>
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className=" bg-transparent text-[#49557e] border font-bold border-orange-800 cursor-pointer rounded-2xl hover:bg-[#fff4f2] px-2 py-2 text-xl "
              >
                Sign in
              </button>
            ) : (
              <div className="relative navbar-profile ">
                <img src={assets.profile_icon} alt="" />
                <ul className="mt-2 absolute hidden right-0 z-1 navbar-profile-dropdown ">
                  <li onClick={()=>navigate('/myorders')} className="flex items-center gap-1 cursor-pointer ">
                    
                      <img className="w-[20px]" src={assets.bag_icon} alt="" />
                      Ordder
                    
                  </li>
                  <hr />
                  <li
                    onClick={logout}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <img className="w-[20px]" src={assets.logout_icon} alt="" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </>
    );
}
export default Navbar