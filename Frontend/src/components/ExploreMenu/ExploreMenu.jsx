// import React from "react";
// import { menu_list } from "../../assets/assets";
// import "./explore.css";
// function ExploreMenu({category,setCategory}){

//     return (
//       <>
//         <div
//           id="menu"
//           className="class1 flex flex-col gap-[20px] w-[80%] mx-auto"
//         >
//           <h1 className="text-[#262626] font-bold">Explore our menu</h1>
//           <p className="max-w-[60%] ">
//             Discover a variety of freshly prepared dishes, from light salads to
//             indulgent desserts, crafted to satisfy every craving. A perfect
//             blend of taste and variety — explore our menu and find your favorite
//             dish today
//           </p>
//           <div className="flex items-center gap-6 my-5 overflow-x-auto scrollbar-hide scroll-smooth">
//             {menu_list.map((item, index) => (
//               <div
//                 onClick={() => {
//                   setCategory((prev) =>
//                     prev === item.menu_name ? "All" : item.menu_name
//                   );
//                 }}
//                 key={index}
//                 className="shrink-0 text-center"
//               >
//                 <img
//                   src={item.menu_image}
//                   alt={item.menu_name}
//                   //   className="w-24 h-24 object-cover rounded-lg"
//                   className={
//                     category === item.menu_name
//                       ? "border-amber-600 border-4 w-30 h-30 rounded-full object-cover "
//                       : " w-24 h-24"
//                   }
//                 />
//                 <p className="mt-2 text-[#747474] text-xl cursor-pointer">
//                   {item.menu_name}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="my-[10px] h-2 bg-white border-none "></div>
//         </div>
//       </>
//     );
// }
// export default ExploreMenu

import React, { useMemo, useState } from "react";
import { menu_list } from "../../assets/assets";


function ExploreMenu({ category: propCategory, setCategory }) {
  const [query, setQuery] = useState("");

  // fallback image (local upload path — will be transformed to a URL by your build)
  const fallbackImage = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  // derive categories from menu_list (memoized)
  const categories = useMemo(() => {
    const s = new Set();
    menu_list.forEach((m) => m.menu_name && s.add(m.menu_name));
    return ["All", ...Array.from(s)];
  }, []);

  // filter menu_list by search query (memoized)
  const filteredMenu = useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return menu_list;
    return menu_list.filter(
      (m) =>
        m.menu_name?.toLowerCase().includes(q) ||
        (m.menu_desc && m.menu_desc.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section
      id="menu"
      className="w-[80%] mx-auto pt-15"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-5xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="explore-heading" className="text-2xl md:text-3xl font-bold">
              Explore our menu
            </h2>
            <p className="mt-3 text-gray-300 max-w-lg">
              Discover a variety of freshly prepared dishes, from light salads
              to indulgent desserts. Use the categories or search to find what
              you crave.
            </p>
          </div>
        </div>

        {/* horizontal category scroller */}
        <div className="mt-6">
          <div className=" flex items-center gap-3 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((c) => {
              const isActive = (propCategory || "All") === c;
              return (
                <button
                  key={c}
                  onClick={() =>
                    setCategory((prev) => (prev === c ? "All" : c))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setCategory((prev) => (prev === c ? "All" : c));
                    }
                  }}
                  className={`shrink-0 px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-amber-400 text-slate-900"
                      : "bg-white/6 text-gray-200 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreMenu;

