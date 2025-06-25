import Image from "next/image";
import Header from "./Components/Layout/Header";
import AboveFold from "./Components/AboveFold/AboveFold";
import { PulseBeams } from "./Components/PulseBeam/PulseBeam";
import Portfolio from "./Components/Portfolio/Portfolio";
import { FadeIn, GridBackground } from "./Components/Motion/MotionLibrary";

export default function Home() {
  return (
    <div className="text-gold">
      <Header />
      <PulseBeams><AboveFold /></PulseBeams>
      <FadeIn direction="up" delay={0.2}>
        <GridBackground >
          <Portfolio />
        </GridBackground>
      </FadeIn>

    </div >
  );
}
