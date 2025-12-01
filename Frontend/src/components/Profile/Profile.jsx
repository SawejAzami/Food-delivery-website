

import React from "react";

const Profile = () => {
  return (
    <div className="w-[100%] flex justify-center items-center gap-2 bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-gray-100   p-6 shadow-2xl ring-1 ring-white/6">
      <div className="flex flex-col items-center justify-center gap-4  p-10 rounded-3xl shadow-2xl ring-1 ring-black/10  ">
        <h1>Name: John Doe</h1>
        <h1>Email_ID:azami@gmail.com</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4  p-10 rounded-3xl shadow-2xl ring-1 ring-black/10  ">
        <input type="text" />
        <button>Change Password</button>
      </div>
    </div>
  );

    
}   

export default Profile; 