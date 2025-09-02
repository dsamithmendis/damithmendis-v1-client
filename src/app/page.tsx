"use client";

import Image from "next/image";
import { useState } from "react";

type PortfolioItem = {
  title: string;
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  { title: "SnowMan", image: "/images/1.jpg" },
  { title: "The Clocks", image: "/images/2.jpg" },
  { title: "Love", image: "/images/3.jpg" },
  { title: "Car", image: "/images/4.jpg" },
  { title: "Old Man", image: "/images/5.jpg" },
  { title: "Candy House", image: "/images/1.jpg" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("Portfolio");

  const tabs = ["Film", "Free Time", "Archviz", "Sketch"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* === Top Section === */}
      <section className="bg-[#0a0a0a] text-white flex flex-col items-center py-10">
        {/* Profile */}
        <div className="w-32 h-32 relative rounded-full overflow-hidden border border-gray-700">
          <Image
            src="/images/1.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="mt-4 text-lg tracking-wider">Damith Mendis</h1>

        {/* Navigation */}
        <nav className="flex gap-8 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-gray-400 hover:text-white transition cursor-pointer ${
                activeTab === tab ? "text-white font-medium" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </section>

      {/* === Bottom Section === */}
      <section className="flex-1 bg-[#000000] text-white">
        {activeTab === "Film" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 lg:px-35 py-16 place-items-center">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-72 h-52 lg:w-86 lg:h-72 relative overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-base text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
