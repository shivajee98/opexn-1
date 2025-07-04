
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../embla-carousel/embla-carousel";
import "../embla-carousel/embla.css";
import { SLIDES } from "@/config/slides";

const OPTIONS: EmblaOptionsType = { loop: true };

export const HeroSlider = () => {
  return (
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  );
};
