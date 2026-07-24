"use client";

import { useState } from "react";
import SpecialCard from "../CardTemplates/SpecialCard/SpecialCard";
import { featuredData } from "@/data/featured.data";
import { IoChevronBack, IoChevronDown } from "react-icons/io5";

const FeaturedSection = () => {
  const getInitialCards = () => {
    if (typeof window === "undefined") return 15;

    const width = window.innerWidth;

    if (width < 640) return 6;
    if (width < 768) return 6;
    if (width < 1024) return 9;
    if (width < 1280) return 12;

    return 15;
  };
  const [visibleCards, setVisibleCards] = useState(getInitialCards);

  return (
    <section className="absolute left-1/2 top-[620px] z-20 w-[95%] max-w-full -translate-x-1/2">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="px-3 text-xl font-bold text-white">ویژه</h2>

        <a href="#" className="text-sm text-orange-400 hover:text-orange-300">
          <span className="flex items-center">
            مشاهده همه
            <IoChevronBack className="text-xl" />
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featuredData.slice(0, visibleCards).map((item) => (
          <SpecialCard key={item.id} card={item} />
        ))}
      </div>

      {visibleCards < featuredData.length && (
        <div className="mt-10 flex items-center">
          <div className="h-px flex-1 bg-zinc-800" />

          <button
            onClick={() => setVisibleCards(featuredData.length)}
            className="mx-6 flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-xl border border-zinc-500 bg-transparent px-6 text-sm font-medium text-white transition-all duration-300 hover:border-zinc-300 hover:bg-white/5"
          >
            <span>مشاهده بیشتر</span>
            <IoChevronDown className="text-sm" />
          </button>

          <div className="h-px flex-1 bg-zinc-800" />
        </div>
      )}
    </section>
  );
};

export default FeaturedSection;
