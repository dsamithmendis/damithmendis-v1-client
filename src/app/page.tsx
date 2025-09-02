"use client";

import { useState } from "react";
import FilmTab from "@/components/tabs/film";
import Header from "@/components/shared/header";
import { FilmItems, tabs } from "@/lib/film-data";
import Footer from "@/components/shared/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Film");

  return (
    <div className="min-h-screen flex flex-col">
      <Header tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <FilmTab activeTab={activeTab} FilmItems={FilmItems} />
      <Footer />
    </div>
  );
}
