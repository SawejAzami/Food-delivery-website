import React from "react";

const StackedCards = () => {
  const cards = [
    { id: 1, rotate: "-rotate-2", offset: "translate-x-2 translate-y-2" },
    { id: 2, rotate: "rotate-1", offset: "translate-x-6 translate-y-6" },
    { id: 3, rotate: "-rotate-3", offset: "translate-x-10 translate-y-10" },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-20">
      {/* Background stacked cards */}
      {cards.map((c, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 
            bg-gradient-to-br from-yellow-50 via-red-50 to-white 
            shadow-2xl rounded-3xl 
            ${c.rotate} ${c.offset}
          `}
        ></div>
      ))}

      {/* Main Front Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 h-[350px]">
        <h2 className="text-xl font-bold mb-4">Main Card Content</h2>

        <p className="text-gray-600">
          This is the main card. You can put images, menu items, food cards, or
          anything here.
        </p>
      </div>
    </div>
  );
};

export default StackedCards;
