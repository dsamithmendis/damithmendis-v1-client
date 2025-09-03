"use client";

import { useState } from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Tabs } from "@/lib/home-data";
import { FilmItems } from "@/lib/film-data";
import { FreeTimeItems } from "@/lib/free-time-data";
import { ArchvizItems } from "@/lib/archviz-data";
import { SketchItems } from "@/lib/sketch-data";
import FilmTab from "@/components/tabs/film";
import FreeTimeTab from "@/components/tabs/free-time";
import ArchvizTab from "@/components/tabs/archviz";
import SketchTab from "@/components/tabs/sketch";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Film");

  return (
    <div className="min-h-screen flex flex-col">
      <Header tabs={Tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <FilmTab activeTab={activeTab} FilmItems={FilmItems} />
      <FreeTimeTab activeTab={activeTab} FreeTimeItems={FreeTimeItems} />
      <ArchvizTab activeTab={activeTab} ArchvizItems={ArchvizItems} />
      <SketchTab activeTab={activeTab} SketchItems={SketchItems} />
      <Footer />
    </div>
  );
}
