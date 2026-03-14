// import React from "react"


// function Header(){

//     return (
//       <>
//         <header className=" m-auto  h-[80vh] w-[80%] bg-no-repeat bg-cover relative">
      



//           {/* <header className="bg-[url('/bg_food.webp')] m-auto mt-10 h-[80vh] w-[80%] bg-no-repeat bg-cover relative"> */}

//           {/* <div className="absolute inset-3 bg-black/60"></div> */}

//           <div className="animate-fadeIn w-1/2 flex flex-col items-start gap-5 absolute bottom-[20%] left-[6vw] z-0">
//             <div className="">
//               <h2 className="font-extrabold text-black text-6xl">
//                 Order your favorite food here
//               </h2>
//               <p className="text-black font-extrabold ">
//                 Freshly cooked meals delivered hot and fast, right to your
//                 doorstep. From quick bites to hearty meals, order what you love
//                 in just a few clicks.
//               </p>
//               {/* <button className="bg-white border-none rounded-full px-4 py-2">
//                 View Menu
//               </button> */}
//             </div>
//           </div>
//         </header>
//       </>
//     );
// }
// export default Header;




import React from "react";
import StackedCards from "../StackCard/StackedCards";
import { Link } from "react-router-dom";
import HangingCard from "../HangingCard/HangingCard";
import { useState } from "react";
import { useContext } from "react";

function Header() {
  
  const [isHang,setIshang]=useState(true)

function hangCard(){
  setIshang((val)=>!val)
}
  return (
    <section>
      <div className="relative">
        <div
          onClick={hangCard}
          className="absolute left-[92.5%] -top-4 z-20 cursor-pointer
               w-6 h-6 rounded-full
               bg-gradient-to-br from-amber-600 to-amber-900
               shadow-lg shadow-amber-900/50
               flex items-center justify-center
               transition-all duration-200
               hover:scale-110 hover:shadow-xl
               active:scale-90 active:shadow-inner"
        >
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div
        className={`absolute right-0 z-10 transform transition-all duration-700 ease-out
    ${
      isHang
        ? "translate-y-0 opacity-100"
        : "-translate-y-16 opacity-0 pointer-events-none"
    }`}
      >
        <HangingCard />
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT SIDE */}
        <div>
          <h1 className="text-5xl md:text-7xl leading-tight font-extrabold tracking-tight">
            Order your <br />
            <span className="text-amber-400">favorite food</span> <br />
            here
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-300 font-medium">
            Freshly cooked meals delivered hot and fast, right to your doorstep.
            From quick bites to hearty meals — order what you love in just a few
            clicks.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold shadow-lg hover:scale-[1.02] transform transition">
              <a href="#menu">Explore Menu</a>
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/20 text-gray-100 font-semibold hover:bg-white/10 transition">
              <Link to="/myorders"> Track Order</Link>
            </button>
          </div>

          {/* <div className="mt-8 flex items-center gap-8 text-gray-300">
            <div className="text-sm">
              <div className="font-bold text-white text-xl">4.8</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white text-xl">2K+</div>
              <div className="text-gray-400">Orders/day</div>
            </div>
            <div className="text-sm">
              <div className="font-bold text-white text-xl">30+</div>
              <div className="text-gray-400">Cities</div>
            </div>
          </div> */}
        </div>

        {/* RIGHT — STACKED CARDS */}
        <div className="flex justify-center">
          <StackedCards />
        </div>
      </div>
    </section>
  );
}

export default Header;






