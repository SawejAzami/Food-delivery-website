import React from "react";
import { assets } from "../../assets/assets";

function AppDownload(){
    return (
      <>
        <div id="mobile-app" className="m-auto mt-[100px] text-2xl text-center font-bold ">
          <p>
            For Better Experience Download <br /> TastyHub App
          </p>
          <div className="flex justify-center gap-2 m-[40px] cursor-pointer">
            <img className=" " src={assets.play_store} alt="" />
            <img className=" " src={assets.app_store} alt="" />
          </div>
        </div>
      </>
    );
}

export default AppDownload