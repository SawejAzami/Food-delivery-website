import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import axios from "axios";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(storeContex);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data[0], "response");
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
    // console.log(data)
  }, [token]);
  return (
    <>
      <div className="my-[50px] mx-[100px] ">
        <h2>My Orders</h2>
        <div className="flex flex-col gap-[20px] mt-[30px] ">
          {data.map((order, index) => {
            return (
              <div
                key={index}
                className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border border-orange-500 "
              >
                <img className="w-[50px]" src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ",";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p>
                  <span className="text-orange-600">&#x25cf;</span>
                  <b className="text-[#454545] font-medium">{order.status}</b>
                </p>
                <button className=" border p-1 cursor-pointer"
                onClick={fetchOrders}>
                  Track Order
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyOrders;
