import "./Animation.css"
function Animation() {
    
    return (
      <>
        <div className="shapedividers_com-2669 w-[100%] h-[100px]">
        
            
        </div>
      </>
    );
}

export default Animation



// import React from "react";

// // TastyHub Home Page - Single-file React component
// // Tailwind CSS required in the project (postcss + tailwind.config.js)
// // Logo image referenced from the uploaded file path (will be transformed to a URL):
// const logoUrl = "/mnt/data/ca0e725e-e555-4c35-9ebe-b93b9ce48d7a.png";

// const sampleMenu = [
//   {
//     id: 1,
//     title: "Margherita Pizza",
//     price: "₹299",
//     desc: "Classic cheese pizza with fresh basil",
//     img: "https://images.unsplash.com/photo-1601924582970-6fb1a96f7c0a?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Paneer Tikka",
//     price: "₹249",
//     desc: "Smoky paneer cubes, perfectly spiced",
//     img: "https://images.unsplash.com/photo-1604908177522-0b0b4ef2b4d9?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Veg Burger",
//     price: "₹199",
//     desc: "Juicy patty with crunchy greens and sauce",
//     img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// export default function TastyHubHome() {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 antialiased">
//       {/* Header */}
//       <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <img
//             src={logoUrl}
//             alt="TastyHub logo"
//             className="w-14 h-14 object-contain"
//           />
//           <span className="font-bold text-lg">TastyHub</span>
//         </div>

//         <nav className="hidden md:flex items-center gap-8 text-sm">
//           <a
//             className="border-b-2 border-transparent hover:border-blue-600 pb-1"
//             href="#"
//           >
//             Home
//           </a>
//           <a className="hover:text-gray-700" href="#menu">
//             Menu
//           </a>
//           <a className="hover:text-gray-700" href="#contact">
//             Contact
//           </a>
//           <a className="hover:text-gray-700" href="#app">
//             Mobile-App
//           </a>
//         </nav>

//         <div className="flex items-center gap-4">
//           <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:shadow-lg transition">
//             Order Now
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
//               />
//             </svg>
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-100">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-700"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu button */}
//         <button className="md:hidden ml-3 p-2 rounded-lg hover:bg-gray-100">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </header>

//       {/* Hero */}
//       <main className="max-w-7xl mx-auto px-6">
//         <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
//           <div>
//             <h1 className="text-6xl md:text-7xl leading-tight font-extrabold tracking-tight">
//               Order your
//               <br />
//               favorite food
//               <br />
//               here
//             </h1>
//             <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-700 font-medium">
//               Freshly cooked meals delivered hot and fast, right to your
//               doorstep. From quick bites to hearty meals, order what you love in
//               just a few clicks.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:scale-[1.02] transform transition">
//                 Explore Menu
//               </button>
//               <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50">
//                 Track Order
//               </button>
//             </div>

//             <div className="mt-8 flex items-center gap-6">
//               <div className="text-sm">
//                 <div className="font-bold">4.8</div>
//                 <div className="text-gray-500">Rating</div>
//               </div>
//               <div className="text-sm">
//                 <div className="font-bold">2K+</div>
//                 <div className="text-gray-500">Orders/day</div>
//               </div>
//               <div className="text-sm">
//                 <div className="font-bold">30+</div>
//                 <div className="text-gray-500">Cities</div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {/* Decorative rounded hero card */}
//             <div className="hidden md:block absolute -right-10 top-0 w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-yellow-100 via-red-50 to-transparent shadow-xl transform rotate-[-10deg]"></div>

//             <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1604908177522-0b0b4ef2b4d9?q=80&w=1200&auto=format&fit=crop"
//                 alt="hero food"
//                 className="w-full h-80 object-cover rounded-2xl"
//               />

//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 {sampleMenu.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center gap-3 p-3 bg-white rounded-lg"
//                   >
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-14 h-14 rounded-md object-cover"
//                     />
//                     <div>
//                       <div className="font-semibold text-sm">{item.title}</div>
//                       <div className="text-xs text-gray-500">{item.price}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Menu preview */}
//         <section id="menu" className="py-16">
//           <h2 className="text-2xl font-bold mb-6">Explore our menu</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sampleMenu.map((item) => (
//               <article
//                 key={item.id}
//                 className="rounded-xl border p-4 hover:shadow-lg transition bg-white"
//               >
//                 <div className="relative">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-44 rounded-lg object-cover"
//                   />
//                   <div className="absolute top-3 right-3 bg-white/80 px-2 py-1 rounded-md text-sm font-semibold">
//                     {item.price}
//                   </div>
//                 </div>
//                 <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
//                 <p className="mt-1 text-sm text-gray-600">{item.desc}</p>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm">
//                     Add
//                   </button>
//                   <div className="text-sm text-gray-500">4.7 ⭐</div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* CTA strip */}
//         <section className="py-10 my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8">
//           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
//             <div>
//               <h3 className="text-2xl font-bold">Hungry now?</h3>
//               <p className="text-sm opacity-90">
//                 Get 15% off on your first order. Use code FIRST15
//               </p>
//             </div>
//             <div>
//               <button className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold">
//                 Order with FIRST15
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer id="contact" className="pb-16">
//           <div className="border-t pt-8 mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <img
//                 src={logoUrl}
//                 alt="logo"
//                 className="w-12 h-12 object-contain"
//               />
//               <div>
//                 <div className="font-semibold">TastyHub</div>
//                 <div className="text-sm text-gray-500">
//                   Fresh meals delivered to your door
//                 </div>
//               </div>
//             </div>

//             <div className="text-sm text-gray-600">
//               © {new Date().getFullYear()} TastyHub. All rights reserved.
//             </div>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }
