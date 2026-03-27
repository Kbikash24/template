"use client";

import BackgroundCanvas from "@/components/BackgroundCanvas";
import NewNavbar from "@/components/NewNavbar";
import NewHero from "@/components/NewHero";
import AboutSection from "@/components/AboutSection";
import FreeResourcesSection from "@/components/FreeResourcesSection";
import PremiumCoursesSection from "@/components/PremiumCoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewFooter from "@/components/NewFooter";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <NewNavbar />
      <main>
        <NewHero />
        <AboutSection />
        <FreeResourcesSection />
        <PremiumCoursesSection />
        <TestimonialsSection />
      </main>
      <NewFooter />
    </>
  );
}
