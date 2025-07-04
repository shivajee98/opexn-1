import ExihibitionCard from "@/components/global/exihibition-card";
import { HeroSlider } from "@/components/global/home/hero-slider";
import { ContactSection } from "./_components/contact-section";
import { DynamicHeader } from "./_components/header";
import { ScrollToTop } from "@/components/global/smooth-scroll/scroll-to-top";
import { VisionMission } from "./_components/vision-mission";
import { FeaturedEvents } from "./_components/featured-events";
import { CoreVerticals } from "./_components/core-verticals";
import { Footer } from "./_components/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <DynamicHeader />
      <HeroSlider />
      <FeaturedEvents />
      <CoreVerticals />
      <VisionMission />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
