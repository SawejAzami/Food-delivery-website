import { useState } from "react";
import { assets } from "../../assets/assets"
import {NavLink} from "react-router-dom"

function Sidebar(){
    const [active, setActive] = useState("");
    const CSS =
      "flex items-center border-[#a9a9a9] border-2 border-r-0 px-[8px] py-[10px] rounded cursor-pointer";
      const CSS_Ative =
        "flex items-center border-[#a9a9a9] border-2 border-r-0 px-[8px] py-[10px] rounded cursor-pointer bg-orange-500";
    return (
      <>
        <div className="w-[18%] min-h-[100vh] border-1 border-t-0 ">
          <div className="pt-[50px] flex flex-col gap-10 pl-[20%]">
            <NavLink
              to="/add"
              onClick={() => setActive("add")}
              className={active === "add" ? CSS_Ative : CSS}
            >
              <img src={assets.add_icon} alt="" />
              <p>Add Items</p>
            </NavLink>

            <NavLink
              onClick={() => setActive("list")}
              to="/list"
              className={active === "list" ? CSS_Ative : CSS}
            >
              <img src={assets.order_icon} alt="" />
              <p>List Items</p>
            </NavLink>

            <NavLink
              onClick={() => setActive("orders")}
              to="/orders"
              className={active === "orders" ? CSS_Ative : CSS}
            >
              <img src={assets.order_icon} alt="" />
              <p>Orders</p>
            </NavLink>
          </div>
        </div>
      </>
    );
}
export default Sidebar