

import React, { useMemo, useState } from "react";
import { menu_list } from "../../assets/assets";


function ExploreMenu({ category: propCategory, setCategory }) {
  const [query, setQuery] = useState("");


  // derive categories from menu_list 
  const categories = useMemo(() => {
    const s = new Set();
    menu_list.forEach((m) => m.menu_name && s.add(m.menu_name));
    return ["All", ...Array.from(s)];
  }, []);

  // filter menu_list by search query 
  const filteredMenu = useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return menu_list;
    return menu_list.filter(
      (m) =>
        m.menu_name?.toLowerCase().includes(q) ||
        (m.menu_desc && m.menu_desc.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section
      id="menu"
      className="w-[80%] mx-auto pt-15"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-5xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="explore-heading" className="text-2xl md:text-3xl font-bold">
              Explore our menu
            </h2>
            <p className="mt-3 text-gray-300 max-w-lg">
              Discover a variety of freshly prepared dishes, from light salads
              to indulgent desserts. Use the categories or search to find what
              you crave.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className=" flex items-center gap-3 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((c) => {
              const isActive = (propCategory || "All") === c;
              return (
                <button
                  key={c}
                  onClick={() =>
                    setCategory((prev) => (prev === c ? "All" : c))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setCategory((prev) => (prev === c ? "All" : c));
                    }
                  }}
                  className={`shrink-0 px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-amber-400 text-slate-900"
                      : "bg-white/6 text-gray-200 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreMenu;

