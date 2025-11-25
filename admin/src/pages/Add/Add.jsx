// import React from "react";
// import { assets } from "../../assets/assets";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// function Add(){
//     const [image,setImage]=useState(false)
//     const [data,setData]=useState({
//         name:"",
//         description:"",
//         price:"",
//         category:"Salad"
//     })
//     const url="http://localhost:4000"
    
//     // const url = "https://food-delivery-website-pp1o.onrender.com";
    
//     const onchangeHandle=(e)=>{
//         const name=e.target.name;
//         const value=e.target.value;
//         setData((data)=>({...data,[name]:value}))
//     }
//     const onSubmitHandler=async (e)=>{
//         e.preventDefault()
//         const formData=new FormData()
//         formData.append("name",data.name)
//         formData.append("description",data.description)
//         formData.append("price", Number(data.price));
//         formData.append("category",data.category)
//         formData.append("image",image)
//         const response=await axios.post(`${url}/api/food/add`,formData)
//         if(response.data.success){
//                 setData({
//                   name: "",
//                   description: "",
//                   price: "",
//                   category: "Salad",
//                 });
//                 setImage(false)
//                 toast.success(response.data.message)
//         }else{
//             toast.error(response.data.message)
//         }
//     }
  
//     return (
//       <>
//         <div className="w-[70%] ml-[25px] mt-[50px] text-[#6d6d6d] text-[16px]">
//           <form
//             onSubmit={onSubmitHandler}
//             className=" flex flex-col gap-[10px] "
//           >
//             <div className="   flex flex-col gap-[10px] ">
//               <p>Upload Image</p>
//               <label htmlFor="image">
//                 <img
//                   className="w-[120px] rounded-2xl "
//                   src={image ? URL.createObjectURL(image) : assets.upload_area}
//                   alt=""
//                 />
//               </label>
//               <input
//                 onChange={(e) => setImage(e.target.files[0])}
//                 type="file"
//                 id="image"
//                 hidden
//                 required
//               />
//             </div>
//             <div className="w-[40%]  flex flex-col gap-[10px] ">
//               <p>Product name</p>
//               <input
//                 value={data.name}
//                 onChange={onchangeHandle}
//                 className="border outline-none p-[10px] "
//                 type="text"
//                 name="name"
//                 placeholder="Type here"
//               />
//             </div>
//             <div className="w-[40%] flex flex-col gap-[10px] ">
//               <p>Product description</p>
//               <textarea
//                 value={data.description}
//                 onChange={onchangeHandle}
//                 className="outline-none p-[10px] border"
//                 name="description"
//                 id=""
//                 row="6"
//                 placeholder="write content here"
//                 required
//               ></textarea>
//             </div>
//             <div className="flex gap-[30px]">
//               <div className="category  flex flex-col gap-[10px] ">
//                 <p>Product category</p>
//                 <select
//                   onChange={onchangeHandle}
//                   className="w-[120px] border p-[10px] "
//                   name="category"
//                 >
//                   <option value="Salad">Salad</option>
//                   <option value="Rolls">Rolls</option>
//                   <option value="Deserts">Deserts</option>
//                   <option value="Sandwich">Sandwich</option>
//                   <option value="Cake">Cake</option>
//                   <option value="Pure veg">Pure veg</option>
//                   <option value="Pasta">Pasta</option>
//                   <option value="Noodles">Noodles</option>
//                 </select>
//               </div>
//               <div className="add-price  flex flex-col gap-[10px] ">
//                 <p>Product price</p>
//                 <input
//                   value={data.price}
//                   onChange={onchangeHandle}
//                   className="outline-none border p-2"
//                   type="number"
//                   name="price"
//                   placeholder="₹20"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-[120px] border-none p-[10px] text-white bg-black cursor-pointer"
//             >
//               Add
//             </button>
//           </form>
//         </div>
//       </>
//     );
// }
// export default Add

// ********* Upgraded Code *********


import React, { useState, useRef } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";


function Add() {
  const [imageFile, setImageFile] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Replace with your backend base URL or keep localhost for dev
  const API_BASE = "http://localhost:4000";
  // Uploaded file path (local) — your instruction: use this path so tooling can convert it.
  const UPLOADED_FALLBACK =
    "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

  const onchangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onFileChange = (file) => {
    if (!file) return;
    // optional: limit file size (e.g., 5MB)
    const maxSizeMB = 5;
    if (file.size / 1024 / 1024 > maxSizeMB) {
      toast.error(`Image must be < ${maxSizeMB}MB`);
      return;
    }
    setImageFile(file);
  };

  const clearImage = () => setImageFile(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const validateForm = () => {
    if (!data.name.trim()) {
      toast.error("Please enter product name");
      return false;
    }
    if (!data.description.trim()) {
      toast.error("Please enter product description");
      return false;
    }
    if (!data.price || Number(data.price) <= 0) {
      toast.error("Please enter a valid price");
      return false;
    }
    // image optional — you can require it if needed
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name.trim());
      formData.append("description", data.description.trim());
      formData.append("price", Number(data.price));
      formData.append("category", data.category);

      // If user selected file, send it. Otherwise optionally send the fallback path as a field.
      if (imageFile) {
        formData.append("image", imageFile);
      } else {
        // Append fallback path so tooling can convert it to URL server-side if you expect it.
        formData.append("imageFallbackPath", UPLOADED_FALLBACK);
      }

      const response = await axios.post(`${API_BASE}/api/food/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setData({ name: "", description: "", price: "", category: "Salad" });
        clearImage();
        toast.success(response.data.message || "Item added");
      } else {
        toast.error(response.data.message || "Failed to add item");
      }
    } catch (err) {
      console.error("Add submit error:", err);
      toast.error(
        err?.response?.data?.message || "Network error — could not add item"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[100%] py-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100">
      <div className="max-w-4xl mx-auto bg-white/6 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Add new product</h2>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
          {/* IMAGE UPLOAD */}
          <div>
            <label className="block mb-2 font-medium">Product image</label>

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/4"
              style={{ cursor: "pointer" }}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-36 h-36 rounded-lg overflow-hidden bg-white/6 flex items-center justify-center">
                <img
                  src={
                    imageFile
                      ? URL.createObjectURL(imageFile)
                      : UPLOADED_FALLBACK || assets.upload_area
                  }
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-200 mb-2">
                  Drag & drop an image here, or click to select a file.
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold"
                  >
                    Choose File
                  </button>

                  {imageFile && (
                    <button
                      type="button"
                      onClick={clearImage}
                      className="px-4 py-2 rounded-md bg-white/6 text-white"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onFileChange(e.target.files[0])}
                />
              </div>
            </div>
          </div>

          {/* TEXT FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Product name</label>
              <input
                name="name"
                value={data.name}
                onChange={onchangeHandle}
                className="p-3 rounded-md bg-transparent border border-white/10 outline-amber-400"
                type="text"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium">Product price (₹)</label>
              <input
                name="price"
                value={data.price}
                onChange={onchangeHandle}
                className="p-3 rounded-md bg-transparent border border-white/10 outline-amber-400"
                type="number"
                min="0"
                step="1"
                placeholder="e.g. 199"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Product description</label>
            <textarea
              value={data.description}
              onChange={onchangeHandle}
              className="p-3 rounded-md bg-transparent border border-white/10 outline-amber-400 resize-none min-h-[120px]"
              name="description"
              placeholder="Write product details..."
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Category</label>
              <select
                name="category"
                value={data.category}
                onChange={onchangeHandle}
                className="p-2 rounded-md  border border-white/10 outline-amber-400 bg-purple-800 "
              >
                <option>Salad</option>
                <option>Rolls</option>
                <option>Deserts</option>
                <option>Sandwich</option>
                <option>Cake</option>
                <option>Pure veg</option>
                <option>Pasta</option>
                <option>Noodles</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-md bg-amber-400 text-slate-900 font-semibold hover:brightness-95 transition disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>

            <button
              type="button"
              onClick={() =>
                setData({
                  name: "",
                  description: "",
                  price: "",
                  category: "Salad",
                }) || clearImage()
              }
              className="px-4 py-2 rounded-md bg-white/6 text-white hover:bg-white/10 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
