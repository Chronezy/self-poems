"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BlurFadeTextDemo1 } from "./blurfade1";
import MobileNav from "./navmobile";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      id="poems"
      className=" rounded-md flex flex-col z-10 items-start justify-start relative w-full"
    >
      <div className="flex flex-col w-full justify-center top-14 md:top-4 z-10 items-center relative ">
        <BlurFadeTextDemo1 />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
