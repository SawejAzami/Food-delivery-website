// import React from "react";
// import { assets } from "../../assets/assets";

// function Footer(){
//     return (
//       <>
//         <div
//           id="contact"
//           className="text-[#d9d9d9] bg-[#323232] flex flex-col gap-[20px] py-[20px] px-[8vh] pt-[80px] "
//         >
//           <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] ">
//             <div className="flex flex-col items-start gap-[20px] ">
//               {/* <img src={assets.logo} alt="" /> */}
//               <img
//                 className="w-[70px]"
//                 src="/tastyhub1.png"
//                 alt="Logo name"
//               />
//               <p>
//                 We are dedicated to delivering high-quality meals with freshness
//                 and flavor you can trust.Connecting food lovers with delicious
//                 meals, crafted to perfection!
//               </p>
//               <div className="flex gap-[10px] cursor-pointer">
//                 <img src={assets.facebook_icon} alt="" />
//                 <img src={assets.twitter_icon} alt="" />
//                 <img src={assets.linkedin_icon} alt="" />
//               </div>
//             </div>
//             <div className="flex flex-col items-start gap-[20px]">
//               <h2>COMPANY</h2>
//               <ul className="cursor-pointer">
//                 <li className="list-none mb-2">Home</li>
//                 <li className="list-none mb-2">About us</li>
//                 <li className="list-none mb-2">Delivery</li>
//                 <li className="list-none mb-2">Privacy Policy</li>
//               </ul>
//             </div>
//             <div className="flex flex-col items-start gap-[20px]">
//               <h2 className="text-white">GET IN TOUCH</h2>
//               <ul className="cursor-pointer">
//                 <li className="list-none mb-2">+1-232-344-232</li>
//                 <li className="list-none mb-2">contact@TastyHub.com</li>
//               </ul>
//             </div>
//           </div>
//           <hr className="w-full h-[2px] m-[20px] bg-gray-700 border-none " />
//           <p>Copyright 2025 &copy; TastyHub</p>
//         </div>
//       </>
//     );
// }
// export default Footer



import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-gray-100"
    >
      {/* Decorative wave at top */}
      <div className="pointer-events-none -mt-1">
        <svg
          className="w-full -mt-1"
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 16C120 40 360 48 720 48s600-8 720-32v32H0V16z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* BRAND / ABOUT */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/tastyhub1.png"
                alt="TastyHub logo"
                className="w-16 h-16 object-contain rounded-md bg-white/5 p-1"
              />
              <div>
                <h3 className="text-lg font-bold">TastyHub</h3>
                <p className="text-sm text-gray-300 mt-0.5">
                  Fresh meals, delivered fast.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              We are dedicated to delivering high-quality meals with freshness
              and flavor you can trust. Connecting food lovers with delicious
              meals, crafted to perfection!
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 transition"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="fb" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 transition"
                aria-label="Twitter"
              >
                <img src={assets.twitter_icon} alt="tw" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="ln" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col md:items-start gap-4">
            <h4 className="text-sm text-gray-200 font-semibold tracking-wide">
              COMPANY
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                About us
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Delivery
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Privacy Policy
              </a>
            </nav>

            {/* small decorative divider on md+ */}
            <div className="hidden md:block w-24 h-[1px] bg-white/6 mt-4" />
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm text-gray-200 font-semibold tracking-wide">
              GET IN TOUCH
            </h4>

            <div className="text-sm text-gray-300 space-y-1">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C3 7.12 4.12 6 5.5 6h13c1.38 0 2.5 1.12 2.5 2.5V17.5C21 18.88 19.88 20 18.5 20h-13C4.12 20 3 18.88 3 17.5V8.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>contact@tastyhub.com</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.48.3.94.53 1.37a1 1 0 0 1-.24 1L8.91 8.91a14 14 0 0 0 6.18 6.18l1.79-1.46a1 1 0 0 1 1 .04c.43.24.9.42 1.38.54a1 1 0 0 1 .75 1V21z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+1-232-344-232</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-2">
              <label
                htmlFor="newsletter"
                className="text-sm text-gray-300 block mb-2"
              >
                Subscribe for offers
              </label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle subscription here: call API or context function
                  const form = e.currentTarget;
                  const email = form.elements.namedItem("email").value;
                  // TODO: send `email` to your backend
                  form.reset();
                  alert(`Thanks — we'll send deals to ${email}`);
                }}
                className="flex gap-2"
              >
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 rounded-md bg-white/6 placeholder:text-gray-300 text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="rounded-md bg-amber-400 text-slate-900 px-4 py-2 font-semibold hover:brightness-95 transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} TastyHub. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
