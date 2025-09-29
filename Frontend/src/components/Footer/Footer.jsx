import React from "react";
import { assets } from "../../assets/assets";

function Footer(){
    return (
      <>
        <div
          id="contact"
          className="text-[#d9d9d9] bg-[#323232] flex flex-col gap-[20px] py-[20px] px-[8vh] pt-[80px] mt-[100px]"
        >
          <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] ">
            <div className="flex flex-col items-start gap-[20px] ">
              {/* <img src={assets.logo} alt="" /> */}
              <img
                className="w-[70px]"
                src="../public/tastyhub1.png"
                alt="Logo name"
              />
              <p>
                We are dedicated to delivering high-quality meals with freshness
                and flavor you can trust.Connecting food lovers with delicious
                meals, crafted to perfection!
              </p>
              <div className="flex gap-[10px] cursor-pointer">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h2>COMPANY</h2>
              <ul className="cursor-pointer">
                <li className="list-none mb-2">Home</li>
                <li className="list-none mb-2">About us</li>
                <li className="list-none mb-2">Delivery</li>
                <li className="list-none mb-2">Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h2 className="text-white">GET IN TOUCH</h2>
              <ul className="cursor-pointer">
                <li className="list-none mb-2">+1-232-344-232</li>
                <li className="list-none mb-2">contact@TastyHub.com</li>
              </ul>
            </div>
          </div>
          <hr className="w-full h-[2px] m-[20px] bg-gray-700 border-none " />
          <p>Copyright 2025 &copy; TastyHub</p>
        </div>
      </>
    );
}
export default Footer