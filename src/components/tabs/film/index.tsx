"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FilmItem } from "@/types/film.types";
interface FilmTabProps {
  activeTab: string;
  FilmItems: FilmItem[];
}

export default function FilmTab({ activeTab, FilmItems }: FilmTabProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (activeTab !== "Film") return null;

  return (
    <section className="w-full bg-[#000000] text-[#cccccc]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 py-16">
        {FilmItems.map((item, idx) => (
          <div key={idx} className="w-full">
            <AnimatedFilmItem
              item={item}
              index={idx}
              isSelected={selectedIndex === idx}
              onClick={() =>
                setSelectedIndex(idx === selectedIndex ? null : idx)
              }
            />

            {selectedIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-[#111111] rounded-lg shadow-lg"
              >
                <h2 className="text-sm md:text-xl font-robotoSlab font-light">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm md:text-base font-light">
                  {item.description || "No additional info available."}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
interface AnimatedFilmItemProps {
  item: FilmItem;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

function AnimatedFilmItem({
  item,
  index,
  isSelected = false,
  onClick,
}: AnimatedFilmItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col items-center cursor-pointer ${
        isSelected ? "scale-105" : ""
      }`}
      onClick={onClick}
    >
      <div className="w-72 h-52 lg:w-86 lg:h-72 relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:opacity-80">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-3 font-light text-sm md:text-lg text-[#cccccc] font-robotoSlab">
        {item.title}
      </p>
    </motion.div>
  );
}
