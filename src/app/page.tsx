import { WavyBackgroundDemo } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/navbar";
import MobileNav from "@/components/navmobile";

import { ShootingStarsAndStarsBackgroundDemo } from "@/components/StarsSection";

export default function Home() {
  return (
    <div>
      <div className="w-full text-black md:hidden">
        <MobileNav />
      </div>
      <FloatingNavDemo />
      <WavyBackgroundDemo />
      <ShootingStarsAndStarsBackgroundDemo />
    </div>
  );
}
