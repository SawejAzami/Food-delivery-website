import React, { useState } from "react"
import Header from "../../components/Header/Header"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/Appdownload/Appdownload"
import Animation from "../../components/Animation/Animation"
function Home(){
    const [category,setCategory]=useState("All")
    return (
      <>
        <div
          className="w-[80% flex flex-col items-center w-full m-auto  border border-white/10 
    bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800
    text-gray-100"
        >
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload />
          <Animation />
        </div>
      </>
    );
}
export default Home