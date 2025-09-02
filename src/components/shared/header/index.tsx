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
      {/* Profile */}
      <div className="w-32 h-32 relative rounded-full overflow-hidden border border-neutral-950">
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="mt-4 text-lg text-[#cccccc] tracking-wider">
        Damith Mendis
      </h1>

      {/* Navigation */}
      <nav className="flex gap-8 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[#333333] hover:text-[#cccccc] transition cursor-pointer ${
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
