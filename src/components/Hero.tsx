"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { BlurFadeTextDemo } from "./blurfade";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="w-full h-screen flex justify-center items-center">
      <div>
        <BlurFadeTextDemo />
      </div>
    </WavyBackground>
  );
}
