import axios from"axios"
const CouponTag = ({deleteCoupon, name, discount, category, couponId }) => {
  // const API_BASE = "http://localhost:4000";
  const API_BASE = "https://food-delivery-website-backend-2q5v.onrender.com";

//   const deleteCoupon = async () => {
    // const response = await axios.post(
    //   `${API_BASE}/api/coupon/delete`,
    //   {couponId},
    // );
    
//     console.log(response)
//   };
  return (
    <>
      <div className=" w-60  bg-purple-50">
        <div className="relative bg-purple-500 text-white px-1 py-2 rounded-lg shadow-lg">
          {/* delete mark */}
          <div
            onClick={()=>deleteCoupon(couponId)}
            className="absolute right-2 top-1.5 text-2xl text-black cursor-pointer"
          >
            X{" "}
          </div>
          {/* Left cut */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>

          {/* Border effect */}
          <div className="border-2 border-red-300 px-8 py-4 rounded-md text-center">
            <h2 className="text-xl font-bold tracking-wide">SAVE {discount}%</h2>
            <p className="text-sm tracking-widest"> CODE {name} </p>
            {/* <p className="text-xs tracking-widest">FOR {category}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default CouponTag;