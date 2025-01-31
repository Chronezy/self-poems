"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { BlurFadeTextDemo } from "./blurfade";

export function WavyBackgroundDemo() {
  return (
    <div id="main">
      <WavyBackground>
        <div>
          <BlurFadeTextDemo />
        </div>
      </WavyBackground>
    </div>
  );
}
