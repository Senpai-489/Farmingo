import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Farmer1 from "../assets/img1_farmer.jpg";
import Farmer2 from "../assets/img2_farmer.jpg";
import Splash from "../assets/splash.png";

export function FeatureCarousel() {
  return (
    <div className=" absolute right-[6vw] translate-y-[10vh] w-[35vw]  z-50">
      <Carousel  opts={{
    align: "start",
    loop: true,
  }}>
    <CarouselContent>
    <CarouselItem className="w-[90vw] rounded-72">
        <img src={Farmer1}  />
        
    </CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
</Carousel>

    </div>
  );
}
export default FeatureCarousel;