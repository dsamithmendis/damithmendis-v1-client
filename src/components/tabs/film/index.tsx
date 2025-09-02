"use client";

import Image from "next/image";

type FilmItem = {
  title: string;
  image: string;
};
interface FilmTabProps {
  activeTab: string;
  FilmItems: FilmItem[];
}

export default function FilmTab({
  activeTab,
  FilmItems,
}: FilmTabProps) {
  return (
    <section className="flex-1 bg-[#000000] text-white">
      {activeTab === "Film" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 lg:px-35 py-16 place-items-center">
          {FilmItems.map((item, idx) => (
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
  );
}
