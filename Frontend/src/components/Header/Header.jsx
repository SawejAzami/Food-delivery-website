import React from "react"


function Header(){

    return (
      <>
        <header className="bg-[url('/bg_food.webp')] m-auto mt-10 h-[80vh] w-[80%] bg-no-repeat bg-cover relative">
         
          <div className="absolute inset-3 bg-black/60"></div>

          
          <div className="animate-fadeIn w-1/2 flex flex-col items-start gap-5 absolute bottom-[20%] left-[6vw] z-0">
            <h2 className="font-extrabold text-white text-6xl">
              Order your favorite food here
            </h2>
            <p className="text-white font-extrabold ">
              Freshly cooked meals delivered hot and fast, right to your
              doorstep. From quick bites to hearty meals, order what you love in
              just a few clicks.
            </p>
            <button className="bg-white border-none rounded-full px-4 py-2">
              View Menu
            </button>
          </div>
        </header>
      </>
    );
}
export default Header;