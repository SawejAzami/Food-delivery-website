// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { toast } from "react-toastify";

// function List(){
    // const url="http://localhost:4000"
    
//     // const url = "https://food-delivery-website-pp1o.onrender.com";
//     const [list,setList]=useState([])
//     const fetchList=async()=>{
//         const response=await axios.get(`${url}/api/food/list`);
//         console.log(response.data)
//         if(response.data.success){
//             setList(response.data.data);
//         }
//         else{
//             toast.error("Error")
//         }
//     }
//     const removeFood=async(foodId)=>{
//         const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
//         await fetchList()
//         if(response.data.success){
//             toast.success(response.data.message)
//         }else{
//             toast.error("Error")
//         }
//     }
//     useEffect(()=>{
//         fetchList();
//     },[])
//     return (
//       <>
//         <div className=" w-[80%] p-10">
//           <p>All Foods List</p>
//           <div className="list-table">
//             <div className="grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] items-center gap-5 border border-[#888080] text-[13px] px-[12px] py-[15px] bg-[#f9f9f9]">
//               <b>Image</b>
//               <b>Name</b>
//               <b>Category</b>
//               <b>Price</b>
//               <b>Action</b>
//             </div>

//             {list.map((item, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] items-center gap-5 border border-[#cacaca] text-[13px] px-[12px] py-[15px]"
//                 >
//                   <img
//                     className="w-[50px]"
//                     src={ item.image}
//                     alt=""
//                   />
//                   <p>{item.name}</p>
//                   <p>{item.category}</p>
//                   <p>₹{item.price}</p>
//                   <p
//                     onClick={() => removeFood(item._id)}
//                     className="cursor-pointer"
//                   >
//                     x
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     );
// }
// export default List


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";


function List() {
  // DEV: change API_BASE to your production backend when ready
  // const API_BASE = "http://localhost:4000";
  
  const API_BASE = "https://food-delivery-website-backend-2q5v.onrender.com";
  const FALLBACK_IMAGE = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);
  const [error, setError] = useState("");

  const fetchList = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_BASE}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data || []);
      } else {
        setError("Failed to load list");
        toast.error(response.data.message || "Failed to load list");
      }
    } catch (err) {
      console.error("fetchList error:", err);
      setError("Network error");
      toast.error("Failed to load list. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    const ok = window.confirm("Are you sure you want to remove this item?");
    if (!ok) return;

    setRemovingId(foodId);
    try {
      const response = await axios.post(`${API_BASE}/api/food/remove`, {
        id: foodId,
      });

      if (response.data.success) {
        toast.success(response.data.message || "Item removed");
        // refresh list
        await fetchList();
      } else {
        toast.error(response.data.message || "Failed to remove item");
      }
    } catch (err) {
      console.error("removeFood error:", err);
      toast.error("Network error — could not remove item");
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div className="w-[100%] py-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">All Foods</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchList}
              className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/10 transition"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          {/* header row */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-sm text-gray-300 py-3 px-2 border-b border-white/10">
            <div>Image</div>
            <div>Name</div>
            <div>Category</div>
            <div>Price</div>
            <div className="text-right">Action</div>
          </div>

          {/* content */}
          <div className="mt-2">
            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-white/8 rounded p-3"
                  >
                    <div className="h-12 w-12 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded col-span-2 md:col-span-1" />
                    <div className="h-4 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded" />
                    <div className="h-8 bg-white/10 rounded md:justify-self-end" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="py-8 text-center text-red-200">{error}</div>
            ) : list.length === 0 ? (
              <div className="py-12 text-center text-gray-300">
                <img
                  src={FALLBACK_IMAGE}
                  alt="empty"
                  className="mx-auto w-48 h-48 object-contain opacity-70 rounded-lg"
                />
                <p className="mt-6">No food items found.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {list.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center p-3 rounded hover:bg-white/8 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded overflow-hidden bg-white/5 flex-shrink-0">
                        <img
                          src={item.image || FALLBACK_IMAGE}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) =>
                            (e.currentTarget.src = FALLBACK_IMAGE)
                          }
                        />
                      </div>
                    </div>

                    <div className="text-sm md:text-base font-medium">
                      {item.name}
                    </div>

                    <div className="text-sm text-gray-300">{item.category}</div>

                    <div className="text-sm text-amber-400 font-semibold">
                      ₹{item.price}
                    </div>

                    <div className="flex justify-end items-center gap-3">
                      {/* <button
                        onClick={() => {
                          // optional: navigate to edit page if you have one
                          toast.info("Edit not implemented");
                        }}
                        className="px-3 py-1 rounded-md bg-white/6 hover:bg-white/10 transition text-sm"
                      >
                        Edit
                      </button> */}

                      <button
                        onClick={() => removeFood(item._id)}
                        disabled={removingId === item._id}
                        className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm disabled:opacity-60"
                      >
                        {removingId === item._id ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
