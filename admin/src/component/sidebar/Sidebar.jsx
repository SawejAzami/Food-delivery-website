// import { useState } from "react";
// import { assets } from "../../assets/assets"
// import {NavLink} from "react-router-dom"

// function Sidebar(){
//     const [active, setActive] = useState("");
//     const CSS =
//       "flex items-center border-[#a9a9a9] border-2 border-r-0 px-[8px] py-[10px] rounded cursor-pointer";
//       const CSS_Ative =
//         "flex items-center border-[#a9a9a9] border-2 border-r-0 px-[8px] py-[10px] rounded cursor-pointer bg-orange-500";
//     return (
//       <>
//         <div className="w-[18%] min-h-[100vh] border-1 border-t-0 ">
//           <div className="pt-[50px] flex flex-col gap-10 pl-[20%]">
//             <NavLink
//               to="/add"
//               onClick={() => setActive("add")}
//               className={active === "add" ? CSS_Ative : CSS}
//             >
//               <img src={assets.add_icon} alt="" />
//               <p>Add Items</p>
//             </NavLink>

//             <NavLink
//               onClick={() => setActive("list")}
//               to="/list"
//               className={active === "list" ? CSS_Ative : CSS}
//             >
//               <img src={assets.order_icon} alt="" />
//               <p>List Items</p>
//             </NavLink>

//             <NavLink
//               onClick={() => setActive("orders")}
//               to="/orders"
//               className={active === "orders" ? CSS_Ative : CSS}
//             >
//               <img src={assets.order_icon} alt="" />
//               <p>Orders</p>
//             </NavLink>
//           </div>
//         </div>
//       </>
//     );
// }
// export default Sidebar


import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";


function Sidebar() {

  const baseClass =
    "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors";
  const activeClass = "bg-amber-400 text-slate-900";

  return (
    // hide on small screens, sticky on desktop
    <aside className="hidden md:block w-60 min-h-screen sticky top-0 bg-blue-950 text-gray-100 p-6">
      <div className="flex flex-col items-start gap-8">
        

        {/* Nav */}
        <nav
          className="w-full flex flex-col gap-3"
          aria-label="Sidebar navigation"
        >
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? activeClass : "text-gray-200 hover:bg-white/5"
              }`
            }
          >
            <img src={assets.add_icon} alt="Add" className="w-5 h-5" />
            <span>Add Items</span>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? activeClass : "text-gray-200 hover:bg-white/5"
              }`
            }
          >
            <img src={assets.order_icon} alt="List" className="w-5 h-5" />
            <span>List Items</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? activeClass : "text-gray-200 hover:bg-white/5"
              }`
            }
          >
            <img src={assets.order_icon} alt="Orders" className="w-5 h-5" />
            <span>Orders</span>
          </NavLink>
        </nav>

      </div>
    </aside>
  );
}

export default Sidebar;
