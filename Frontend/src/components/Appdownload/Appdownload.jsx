import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { useEffect } from "react";
import { useContext } from "react";

import { storeContex } from "../../Context/StoreContextProvider";
function AppDownload() {
    const { url } = useContext(storeContex);
  // const data = [
  //   { name: "Total Orders", value: 120 },
  //   { name: "Delivered", value: 80 },
  //   { name: "Failed", value: 10 },
  //   { name: "Processing", value: 20 },
  //   { name: "Out for Delivery", value: 10 },
  // ];
  const [data, setData] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     const response = await axios.get(`${url}/api/order/list`);

     let counts = response.data.data.reduce((acc, curr) => {
       acc[curr.status] = (acc[curr.status] || 0) + 1;
       return acc;
     }, {});

     counts.Total = response.data.data.length;
     //  converting object into array
     const formattedData = Object.keys(counts).map((key) => ({
       name: key,
       value: counts[key],
      }));
      
     setData(formattedData);
   };

   fetchData();
 }, []);
  console.log(data)
  return (
    <>
      <div className="m-10 flex gap-10 rounded-2xl p-8 ">
        <div>
          <h2 className="text-xl font-semibol gap-2 text-white mb-4 text-center">
            Order Status Overview
          </h2>

          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />

            <XAxis dataKey="name" stroke="#ccc" angle={-20} textAnchor="end"/>
            <YAxis stroke="#ccc" />

            <Tooltip
              contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />

            <Legend />

            <Bar
              dataKey="value"
              fill="#fbbf24"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </div>
        <div
          id="mobile-app"
          className="m-auto mt-[100px] text-2xl text-center font-bold "
        >
          <p>
            For Better Experience Download <br /> TastyHub App
          </p>
          <div className="flex justify-center gap-2 m-[40px] cursor-pointer">
            <img className=" " src={assets.play_store} alt="" />
            <img className=" " src={assets.app_store} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDownload;
