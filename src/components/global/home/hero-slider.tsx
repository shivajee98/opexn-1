import { EmblaOptionsType } from "embla-carousel";
import "../embla-carousel/embla.css";
import { SLIDES } from "@/config/slides";
import dynamic from "next/dynamic";

const OPTIONS: EmblaOptionsType = { loop: true };

const EmblaCarousel = dynamic(
  () => import("../embla-carousel/embla-carousel"),
  {
    ssr: false,
  }
);

const HeroSlider = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default HeroSlider;
