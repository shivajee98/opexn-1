"use client";

import { ScrollToTop } from "@/components/global/smooth-scroll/scroll-to-top";
import { Footer } from "./_components/footer";
import dynamic from "next/dynamic";
import Loader from "@/components/global/Loader";

const HeroSlider = dynamic(
  () => import("../../components/global/home/hero-slider"),
  {
    loading: () => <Loader />,
    ssr: false,
  }
);
const DynamicHeader = dynamic(() => import("./_components/header"), {
  ssr: false,
});

const FeaturedEvents = dynamic(() => import("./_components/featured-events"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("./_components/contact-section"), {
  ssr: false,
});

const VisionMission = dynamic(() => import("./_components/vision-mission"), {
  ssr: false,
});

const CoreVerticals = dynamic(() => import("./_components/core-verticals"), {
  ssr: false,
});

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
