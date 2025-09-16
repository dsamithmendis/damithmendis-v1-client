"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { RiCloseLine } from "react-icons/ri";
import { SketchItem } from "@/types/sketch.types";
interface SketchTabProps {
  activeTab: string;
  SketchItems: SketchItem[];
}

export default function SketchTab({ activeTab, SketchItems }: SketchTabProps) {
  const [selectedItem, setSelectedItem] = useState<SketchItem | null>(null);

  if (activeTab !== "Sketch") return null;

  return (
    <section className="flex-1 bg-[#000000] text-[#cccccc]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 py-16 place-items-center">
        {SketchItems.map((item, idx) => (
          <AnimatedSketchItem
            key={idx}
            item={item}
            index={idx}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <FullScreenModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
interface AnimatedSketchItemProps {
  item: SketchItem;
  index: number;
  onClick: () => void;
}

function AnimatedSketchItem({ item, index, onClick }: AnimatedSketchItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
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
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-72 h-52 lg:w-86 lg:h-72 relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:opacity-80">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm font-light md:text-lg text-[#cccccc] font-robotoSlab">
        {item.title}
      </p>
    </motion.div>
  );
}

interface FullScreenModalProps {
  item: SketchItem;
  onClose: () => void;
}

function FullScreenModal({ item, onClose }: FullScreenModalProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 p-5">
      <button
        className="absolute top-2 z-50 right-2 text-white text-3xl hover:text-red-500 transition-colors"
        onClick={onClose}
      >
        <RiCloseLine className="cursor-pointer bg-white/10 rounded-full" />
      </button>
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] md:max-h-[120vh]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
