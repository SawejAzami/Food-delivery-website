// import React from "react"
// import { assets} from "../../assets/assets"

// function Navbar(){
//     return (
//       <>
//         <div className="flex justify-between items-center px-[6%] ">
//           <img className="w-[50px] " src="../public/tastyhub1.png" alt="" />
//           <img className="w-[40px] " src={assets.profile_image} alt="" />
//         </div>
//       </>
//     );
// }
// export default Navbar


import React from "react";
import { assets } from "../../assets/assets";



function Navbar() {
  const fallbackLogo = "/mnt/data/b380fb2f-8957-4ada-adcf-9292f7dd3f7e.png";

  return (
    <nav className="w-full bg-blue-950 text-gray-100 py-4 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={"/tastyhub1.png"}
            onError={(e) => (e.currentTarget.src = fallbackLogo)}
            alt="TastyHub Logo"
            className="w-12 h-12 rounded-lg bg-white/10 p-1 object-contain"
          />
          <h1 className="text-xl font-semibold hidden sm:block">TastyHub</h1>
        </div>

        {/* Right Profile */}
        <div className="flex items-center gap-4">
          {/* <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition text-sm">
            Menu
          </button> */}

          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 p-1 cursor-pointer hover:scale-105 transition">
            <img
              src={assets.profile_image}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
