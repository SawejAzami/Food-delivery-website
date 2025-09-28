import React from "react";
import { menu_list } from "../../assets/assets";
import "./explore.css";
function ExploreMenu({category,setCategory}){

    return (
      <>
        <div
          id="menu"
          className="class1 flex flex-col gap-[20px] w-[80%] mx-auto"
        >
          <h1 className="text-[#262626] font-bold">Explore our menu</h1>
          <p className="max-w-[60%] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            cumque non, modi doloremque at voluptate dicta quis veritatis eum
            necessitatibus.
          </p>
          <div className="flex items-center gap-6 my-5 overflow-x-auto scrollbar-hide scroll-smooth">
            {menu_list.map((item, index) => (
              <div
                onClick={() => {
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  );
                }}
                key={index}
                className="shrink-0 text-center"
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  //   className="w-24 h-24 object-cover rounded-lg"
                  className={
                    category === item.menu_name
                      ? "border-amber-600 border-4 w-30 h-30 rounded-full object-cover "
                      : " w-24 h-24"
                  }
                />
                <p className="mt-2 text-[#747474] text-xl cursor-pointer">
                  {item.menu_name}
                </p>
              </div>
            ))}
          </div>
          <div className="my-[10px] h-2 bg-white border-none "></div>
        </div>
      </>
    );
}
export default ExploreMenu