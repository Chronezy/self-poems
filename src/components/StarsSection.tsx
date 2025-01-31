"use client";
import React from "react";
import { BlurFadeTextDemo1 } from "./blurfade1";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { ExpandableCardDemo } from "./gridcards";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      id="poems"
      className=" rounded-md h-screen flex flex-col z-10 items-start justify-start relative w-full"
    >
      <div className="flex flex-col w-full justify-center top-14 md:top-4 md:gap-44 gap-10 items-center relative ">
        <BlurFadeTextDemo1 />
        <div className="z-10">
          <ExpandableCardDemo />
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
