


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
          <NavLink
            to="/addCoupon"
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? activeClass : "text-gray-200 hover:bg-white/5"
              }`
            }
          >
            <img src={assets.add_icon} alt="Add" className="w-5 h-5" />
            <span>Add Coupon</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
