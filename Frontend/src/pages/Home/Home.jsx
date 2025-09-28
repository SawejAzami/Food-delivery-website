import React, { useState } from "react"
import Header from "../../components/Header/Header"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import AppDownload from "../../components/Appdownload/Appdownload"
function Home(){
    const [category,setCategory]=useState("All")
    return (
      <>
        <div className="w-[80% flex flex-col items-center">
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload/>
        </div>
      </>
    );
}
export default Home