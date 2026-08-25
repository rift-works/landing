import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { Method } from "@/components/home/Method";
import { Positioning } from "@/components/home/Positioning";
import { Problem } from "@/components/home/Problem";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Positioning />
      <CapabilitiesPreview />
      <Method />
      <AboutTeaser />
      <ContactBand />
    </>
  );
}
