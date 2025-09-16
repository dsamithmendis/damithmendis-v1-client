"use client";

import Image from "next/image";

type HeaderProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Header({ tabs, activeTab, setActiveTab }: HeaderProps) {
  return (
    <section className="bg-[#0a0a0a] text-white flex flex-col items-center py-10">
      <div className="w-32 h-32 relative rounded-full overflow-hidden border border-neutral-950">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="mt-4 text-sm md:text-xl text-[#cccccc] tracking-widest font-robotoSlab font-light">
        Damith Mendis
      </h1>

      <nav className="flex gap-8 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm md:text-xl text-[#333333] hover:text-[#cccccc] transition cursor-pointer font-robotoSlab font-light ${
              activeTab === tab ? "text-[#cccccc]" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </section>
  );
}
