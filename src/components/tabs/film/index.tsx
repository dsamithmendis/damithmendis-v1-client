"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


type FilmItem = {
  title: string;
  image: string;
};

interface FilmTabProps {
  activeTab: string;
  FilmItems: FilmItem[];
}

export default function FilmTab({ activeTab, FilmItems }: FilmTabProps) {
  if (activeTab !== "Film") return null;

  return (
    <section className="flex-1 bg-[#000000] text-[#cccccc]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 py-16 place-items-center">
        {FilmItems.map((item, idx) => (
          <AnimatedFilmItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

interface AnimatedFilmItemProps {
  item: FilmItem;
  index: number;
}

function AnimatedFilmItem({ item, index }: AnimatedFilmItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-center"
    >
      <div className="w-72 h-52 lg:w-86 lg:h-72 relative overflow-hidden shadow-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-base text-[#cccccc]">{item.title}</p>
    </motion.div>
  );
}
