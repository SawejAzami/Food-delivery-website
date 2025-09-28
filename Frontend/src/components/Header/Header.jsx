import React from "react"


function Header(){

    return (
      <>
        <header className="bg-[url('/header_img.png')] m-auto mt-10 h-[84vh]  w-[80%] bg-no-repeat bg-contain relative">
          <div className=" animate-fadeIn w-1/2 flex flex-col items-start gap-5 absolute bottom-[20%] left-[6vw] ">
            <h2 className="font-extrabold text-white text-6xl">
              Order your favorite food here
            </h2>
            <p className="text-white font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              tempore, architecto doloremque facere nostrum obcaecati sit
              reprehenderit iste aspernatur accusamus.
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