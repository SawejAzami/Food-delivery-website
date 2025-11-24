import React, { useContext } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import Fooditem from "../Fooditem/Fooditem";


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContex);
  // console.log(food_list,"foodlist")
  return (
    <>
      <div className=" mt-[30px] w-[80%]">
        <h2 className="text-2xl font-bold">Top dishes near you</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2 mt-[30px]">
          {food_list?.map((item, index) => {
            if(category==="All"||category===item.category)
            return (
              
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
                
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;

// ***************************************

// import React, { useContext, useMemo, useState } from "react";
// import { storeContex } from "../../Context/StoreContextProvider";
// import Fooditem from "../Fooditem/Fooditem";

// /**
//  * Improved FoodDisplay
//  *
//  * Features:
//  *  - responsive grid (auto-fit)
//  *  - search
//  *  - sort (price low->high, high->low)
//  *  - load more pagination
//  *  - skeleton loading & empty state
//  *
//  * NOTE: fallback image uses the uploaded path
//  * Path: /mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png
//  */
// const FoodDisplay = ({ category: propCategory }) => {
//   const { food_list } = useContext(storeContex);

//   const [category, setCategory] = useState(propCategory || "All");
//   const [query, setQuery] = useState("");
//   const [sort, setSort] = useState("popular");
//   const [visibleCount, setVisibleCount] = useState(8);

//   const fallbackImage = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

//   const categories = useMemo(() => {
//     const set = new Set();
//     if (!food_list) return ["All"];
//     food_list.forEach((f) => f.category && set.add(f.category));
//     return ["All", ...Array.from(set)];
//   }, [food_list]);

//   const filtered = useMemo(() => {
//     if (!food_list) return [];
//     let list = [...food_list];

//     if (category !== "All") {
//       list = list.filter((f) => f.category === category);
//     } else if (propCategory !== "All") {
//       list = list.filter((f) => f.category === propCategory);
//     }

//     const q = query.trim().toLowerCase();
//     if (q) {
//       list = list.filter(
//         (f) =>
//           f.name?.toLowerCase().includes(q) ||
//           f.description?.toLowerCase().includes(q)
//       );
//     }

//     if (sort === "price-asc") {
//       list.sort((a, b) => a.price - b.price);
//     } else if (sort === "price-desc") {
//       list.sort((a, b) => b.price - a.price);
//     } else if (sort === "newest") {
//       list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//     }

//     return list;
//   }, [food_list, category, propCategory, query, sort]);

//   const Skeleton = () => (
//     <div className="animate-pulse p-4 rounded-2xl bg-white/6 backdrop-blur-sm h-[380px]">
//       <div className="bg-gray-300/30 h-[180px] rounded-md" />
//       <div className="mt-4 space-y-2">
//         <div className="h-5 w-3/4 bg-gray-300/30 rounded" />
//         <div className="h-3 w-1/2 bg-gray-300/30 rounded" />
//         <div className="h-6 w-1/4 bg-gray-300/30 rounded" />
//       </div>
//     </div>
//   );

//   return (
//     <div className="mt-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-bold text-white">
//               Top dishes near you
//             </h2>
//             <p className="text-sm text-gray-300 mt-1">
//               Fresh picks selected for you — search, filter or sort to find what
//               you want.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="hidden sm:flex gap-2 items-center overflow-x-auto">
//               {categories.map((c) => (
//                 <button
//                   key={c}
//                   onClick={() => {
//                     setCategory(c);
//                     setVisibleCount(8);
//                   }}
//                   className={`px-3 py-1 rounded-full text-sm transition ${
//                     category === c
//                       ? "bg-amber-400 text-slate-900"
//                       : "bg-white/6 text-gray-200 hover:bg-white/10"
//                   }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 bg-white/6 rounded-md px-2 py-1">
//               <input
//                 type="search"
//                 placeholder="Search dishes..."
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                   setVisibleCount(8);
//                 }}
//                 className="bg-transparent text-white text-sm outline-none px-2 placeholder:text-gray-300"
//               />
//             </div>

//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="bg-white/6 text-white text-sm px-3 py-1 rounded-md outline-none"
//             >
//               <option value="popular">Sort: Popular</option>
//               <option value="price-asc">Price: Low → High</option>
//               <option value="price-desc">Price: High → Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>

//         <div className="mt-6">
//           {!food_list ? (
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <Skeleton key={i} />
//               ))}
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-16">
//               <img
//                 src={fallbackImage}
//                 alt="no results"
//                 className="w-48 h-48 opacity-60 object-contain"
//               />
//               <p className="text-gray-300 mt-6">
//                 No dishes found. Try a different search or category.
//               </p>
//             </div>
//           ) : (
//             <>
//               <div
//                 className="grid gap-6"
//                 style={{
//                   gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//                 }}
//               >
//                 {filtered.slice(0, visibleCount).map((item) => (
//                   <Fooditem
//                     key={item._id}
//                     id={item._id}
//                     name={item.name}
//                     description={item.description}
//                     price={item.price}
//                     image={item.image || fallbackImage}
//                   />
//                 ))}
//               </div>

//               {visibleCount < filtered.length && (
//                 <div className="flex justify-center mt-8">
//                   <button
//                     onClick={() => setVisibleCount((p) => p + 8)}
//                     className="px-6 py-2 rounded-full bg-amber-400 text-slate-900 font-semibold hover:brightness-95 transition"
//                   >
//                     Load more
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
