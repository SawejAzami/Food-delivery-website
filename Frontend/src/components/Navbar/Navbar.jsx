// import React, { useContext, useState } from "react"
// import { assets } from "../../assets/assets"
// import './Navbar.css'
// import {Link, useNavigate} from "react-router-dom"
// import { storeContex } from "../../Context/StoreContextProvider";

// function Navbar({setShowLogin}){

//     const { getCartTotalAmount ,token,setToken} = useContext(storeContex);

//     const hover =
//       "flex flex-col gap-[10px] bg-[#fff2ef] px-[25px] py-[12px] border border-orange-500  outline-2 list-none ";

//     const [active, setActive] = useState("Home");

//     const navigate=useNavigate()
//     const logout=async()=>{
//       localStorage.removeItem("token");
//       setToken("");
//       navigate("/")
//     }

//     return (
//       <>
//         <div className="flex w-[80%] m-auto justify-between items-center mt-8">
//           <img className="w-[50px]" src="/tastyhub1.png" alt="Logo name" />

//           <ul className="flex gap-3 ">
//             {/* {links.map((link) => (
//               <Link
//                 key={link}
//                 onClick={() => setActive(link)}
//                 className={`cursor-pointer pb-1 ${
//                   active === link
//                     ? "underline underline-offset-4 decoration-2 decoration-blue-600"
//                     : ""
//                 }`}
//               >
//                 {link}
//               </Link>

//             ))} */}

//             <Link
//               to="/"
//               onClick={() => setActive("Home")}
//               className={
//                 active === "Home"
//                   ? "bg-white-600 p-1 border rounded text-blue-600 font-bold"
//                   : "bg-blue-500 p-1 border rounded text-white"
//               }
//             >
//               Home
//             </Link>
//             <a
//               href="#menu"
//               onClick={() => setActive("Menu")}
//               className={
//                 active === "Menu"
//                   ? "bg-white-600 p-1 border rounded text-blue-600 font-bold"
//                   : "bg-blue-500 p-1 border rounded text-white"
//               }
//             >
//               Menu
//             </a>
//             <a
//               href="#contact"
//               onClick={() => setActive("Contact")}
//               className={
//                 active === "Contact"
//                   ? "bg-white-600 p-1 border rounded text-blue-600 font-bold"
//                   : "bg-blue-500 p-1 border rounded text-white"
//               }
//             >
//               Contact
//             </a>
//             <a
//               href="#mobile-app"
//               onClick={() => setActive("Mobile-App")}
//               className={
//                 active === "Mobile-App"
//                   ? "bg-white-600 p-1 border rounded text-blue-600 font-bold"
//                   : "bg-blue-500 p-1 border rounded text-white"
//               }
//             >
//               Mobile-App
//             </a>
//           </ul>
//           <div className="flex justify-center items-center gap-5">
//             {/* <img src={assets.search_icon} alt="" /> */}
//             <div className="relative">
//               <Link to="/cart">
//                 <img
//                   onClick={() => setActive("")}
//                   src={assets.basket_icon}
//                   alt=""
//                 />
//               </Link>
//               <div
//                 className={
//                   getCartTotalAmount() === 0
//                     ? " "
//                     : "absolute w-3 h-3  bg-orange-800 rounded-full top-[-8px] right-[-8px]"
//                 }
//               ></div>
//             </div>
//             {!token ? (
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className=" bg-transparent text-[#49557e] border font-bold border-orange-800 cursor-pointer rounded-2xl hover:bg-[#fff4f2] px-2 py-2 text-xl "
//               >
//                 Sign in
//               </button>
//             ) : (
//               <div className="relative navbar-profile ">
//                 <img src={assets.profile_icon} alt="" />
//                 <ul className="mt-2 absolute hidden right-0 z-1 navbar-profile-dropdown ">
//                   <li
//                     onClick={() => navigate("/myorders")}
//                     className="flex items-center gap-1 cursor-pointer "
//                   >
//                     <img className="w-[20px]" src={assets.bag_icon} alt="" />
//                     Order
//                   </li>
//                   <hr />
//                   <li
//                     onClick={logout}
//                     className="flex items-center gap-1 cursor-pointer"
//                   >
//                     <img className="w-[20px]" src={assets.logout_icon} alt="" />
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </>
//     );
// }
// export default Navbar


import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { storeContex } from "../../Context/StoreContextProvider";

function Navbar({ setShowLogin }) {
  const { getCartTotalAmount, token, setToken } = useContext(storeContex);
  const [active, setActive] = useState("Home");
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);


  const logout = async () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // close profile dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setActive("Home")}
          className="flex items-center gap-3"
        >
          <img
            src="/tastyhub1.png"
            alt="TastyHub"
            className="w-20 h-20 object-contain rounded-md bg-white/5 "
          />
          <span className="text-lg font-bold tracking-tight hidden sm:inline">
            TastyHub
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              active === "Home"
                ? "bg-white/10 text-white"
                : "text-gray-200 hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          <a
            href="#menu"
            onClick={() => setActive("Menu")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              active === "Menu"
                ? "bg-white/10 text-white"
                : "text-gray-200 hover:bg-white/5"
            }`}
          >
            Menu
          </a>

          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              active === "Contact"
                ? "bg-white/10 text-white"
                : "text-gray-200 hover:bg-white/5"
            }`}
          >
            Contact
          </a>

          <a
            href="#mobile-app"
            onClick={() => setActive("Mobile-App")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              active === "Mobile-App"
                ? "bg-white/10 text-white"
                : "text-gray-200 hover:bg-white/5"
            }`}
          >
            Mobile-App
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" onClick={() => setActive("")} className="relative">
            <img src={assets.basket_icon} alt="cart" className="w-6 h-6" />
            {getCartTotalAmount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {getCartTotalAmount()}
              </span>
            )}
          </Link>

          {/* Sign in / Profile */}
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className=" flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 font-semibold hover:brightness-95 transition"
            >
              Sign in
            </button>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((s) => !s)}
                className="flex items-center gap-2 rounded-full bg-white/6 px-2 py-1 hover:bg-white/10 transition"
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                <img
                  src={assets.profile_icon}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                {/* <span className="hidden sm:inline text-sm">Account</span> */}
              </button>

              {/* dropdown */}
              {profileOpen && (
                <ul className="absolute right-0 mt-2 w-44 bg-white/6 backdrop-blur-sm rounded-md shadow-lg py-2 z-50">
                  <li
                    onClick={() => {
                      navigate("/profile");
                      setProfileOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-gray-100 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src={assets.profile_icon}
                      alt="profile"
                      className="w-4 h-4"
                    />
                    Profile
                  </li>
                  <li
                    onClick={() => {
                      navigate("/myorders");
                      setProfileOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-gray-100 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src={assets.bag_icon}
                      alt="orders"
                      className="w-4 h-4"
                    />
                    Orders
                  </li>
                  <li className="border-t border-white/6 my-1" />
                  <li
                    onClick={logout}
                    className="px-4 py-2 text-sm text-gray-100 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src={assets.logout_icon}
                      alt="logout"
                      className="w-4 h-4"
                    />
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;


