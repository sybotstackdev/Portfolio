"use client";
import React from "react";
import { PinContainer } from "@/lib/3dpin";
import Image from "next/image";

export function Card() {
  return (
    <div className=" w-full my-4 flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>

          <Image src="/portfolio/pic1.png" alt="portfolio" className="rounded-lg mt-4 w-full h-full object-cover" width={500} height={500} />
        </div>
      </PinContainer>
    </div>
  );
}
