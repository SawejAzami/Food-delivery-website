import React from "react";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const PiChart = () => {
      const { url} = useContext(storeContex);
    
  const data = [
    { name: "Total Orders", value: 120 },
    { name: "Delivered", value: 80 },
    { name: "Failed", value: 10 },
    { name: "Processing", value: 20 },
    { name: "Out for Delivery", value: 10 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800">
      <div className="bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Order Status Overview
        </h2>

        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />

          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />

          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
            labelStyle={{ color: "#fff" }}
          />

          <Legend />

          <Bar dataKey="value" fill="#fbbf24" radius={[6, 6, 0, 0]} />
        </BarChart>
      </div>
    </div>
  );
};

export default PiChart;
