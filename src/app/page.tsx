'use client'
import Image from "next/image";
import NavBar from "./ui/sections/NavBar";
import Hero from "./ui/sections/Hero";
import Explore from "./ui/sections/Explore";
import LatestUpdates from "./ui/sections/LatestUpdates";
import Safety from "./ui/sections/Safety";
import Research from "./ui/sections/Reasearch";
import Products from "./ui/sections/Products";
import Careers from "./ui/sections/Careers";
import Footer from "./ui/sections/Footer";
import React, { useEffect, useRef } from "react";

export default function Home() {

  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex flex-col">
      <NavBar reff={footerRef} />
      <Hero />
      <div className=" 2xl:max-w-[1608px] 2xl:mx-auto">
        <Explore />
        <div className="border-t border-white mx-4 mt-9 xl:mx-6 2xl:mx-4" />
        <LatestUpdates />
        <div className="border-t border-white mx-4 mt-9 xl:mx-6 2xl:mx-4" />
        <Safety />
        <div className="border-t border-white mx-4 mt-6 sm:mt-9 xl:mx-6 2xl:mx-4" />
        <Research />
        <div className="border-t border-white mx-4 mt-6 xl:mx-6 2xl:mx-4" />
        <Products />
        <div className="border-t border-white mx-4 mt-6 xl:mx-6 2xl:mx-4" />
        <Careers />
        <div className="border-t border-white mx-4 mt-36 xl:mx-6 2xl:mx-4" />
        <section className="flex flex-col gap-3 justify-center items-start mx-4 my-3 mt-2 xl:mx-6 2xl:mx-4">
          <h1 className="text-4xl sm:text-5xl">Join us in shaping the future of technology.</h1>
          <div className="w-full my-16">
            <button className="text-xl border-2 w-full py-7 rounded-sm border-white hover:bg-white hover:text-black">
              View careers
            </button>
          </div>
        </section>
        <Footer reff={footerRef} />
      </div>

    </main>
  );
}
