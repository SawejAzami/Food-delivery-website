import React from "react"
import { assets} from "../../assets/assets"

function Navbar(){
    return (
      <>
        <div className="flex justify-between items-center px-[6%] ">
          <img className="w-[50px] " src="../public/tastyhub1.png" alt="" />
          <img className="w-[40px] " src={assets.profile_image} alt="" />
        </div>
      </>
    );
}
export default Navbar