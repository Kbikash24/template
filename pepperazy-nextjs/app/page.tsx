import Hero from "@/components/Hero";
import VideoCards from "@/components/VideoCards";
import BrandsAndStats from "@/components/BrandsAndStats";
import Platform from "@/components/Platform";
import FeatureRows from "@/components/FeatureRows";
import Toolkit from "@/components/Toolkit";
import ResultsAndTeams from "@/components/ResultsAndTeams";
import Blog from "@/components/Blog";
import TrustCompliance from "@/components/TrustCompliance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoCards />
      <BrandsAndStats />
      <Platform />
      <FeatureRows />
      <Toolkit />
      <ResultsAndTeams />
      <Blog />
      <TrustCompliance />
      <Footer />
    </main>
  );
}
