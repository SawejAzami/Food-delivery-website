import React, { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import CouponTag from "../../component/CouponTag/CouponTag";
const AddCoupon = () => {
  // const API_BASE = "http://localhost:4000";
  const API_BASE = "https://food-delivery-website-backend-2q5v.onrender.com";
  const [data, setData] = useState({
    code: "",
    discount: "",
    category: "",
  });
  const [coupons,setCoupons]=useState([])
  // const [isLoading,setIsloading]=useState(true)

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const response = await axios.post(`${API_BASE}/api/coupon/add`,data);
    console.log(response)
    setData({
      code: "",
      discount: "",
      category: "",
    });
    fetchCoupon();
  };
  const fetchCoupon = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/coupon/get`);

      if (response.data.success) {
        setCoupons(response.data.coupon);
        console.log(coupons)
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
      fetchCoupon();
  }, []);

  const deleteCoupon = async (couponId) => {
    try {
      const response = await axios.post(`${API_BASE}/api/coupon/delete`, {
        couponId,
      });

      if (response.data.success) {
        setCoupons((prev) => prev.filter((coupon) => coupon._id !== couponId));
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="grid grid-cols-2">
      {/* 1st part */}

      <div className="bg-purple-50 flex items-center justify-center h-screen md:p-20 ">
        <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Enter Code
          </h2>

          <input
            type="text"
            name="code"
            placeholder="Enter code (A-Z, 0-9)"
            value={data.code.toLocaleUpperCase()}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />
          <input
            type="number"
            name="discount"
            placeholder="Enter discount"
            value={data.discount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />
          <input
            type="text"
            name="category"
            placeholder="Enter category old or new"
            value={data.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />

          {coupons.length < 2 && (
            <button
              onClick={handleSubmit}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition w-full"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* 2nd part */}
      <div className="bg-purple-50 h-screen flex flex-col justify-center items-center gap-3 ">
        {coupons &&
          coupons.map((val) => {
            return (
              <CouponTag
                deleteCoupon={deleteCoupon}
                key={val._id}
                name={val.code}
                discount={val.discount}
                category={val.category}
                couponId={val._id}
              />
            );
          })}
      </div>
    </div>
  );
};;

export default AddCoupon;
