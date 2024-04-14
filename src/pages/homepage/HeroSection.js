import React, { useState } from "react";
import banner from "../../images/banner.jpeg";
import TestimonialSlider from "./TestimonialSlider";
import testimonialData from "../../data/testimonial-data/TestimonialData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  // ----- Use state to set the current slide -----
  const [current, setCurrent] = useState(0);

  // ---- Next slide function -----
  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === testimonialData.length - 1 ? 0 : prevCurrent + 1
    );
  };

  // ----- Previous slide function -----
  const previousSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? testimonialData.length - 1 : prevCurrent - 1
    );
  };
  const divStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover", // Optional: You can adjust these styles based on your requirements
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={divStyle}
      className="relative group p-4 rounded-md min-w-screen max-w-[1240px] md:m-auto justify-center items-start  min-h-[70vh]"
    >
      <TestimonialSlider
        current={current}
        setCurrent={setCurrent}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />
      <div className="bg-lightest z-10 rounded-full text-darkest absolute top-1/2 -translate-y-1/2 left-2 group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer flex items-center">
        <FaArrowAltCircleLeft onClick={previousSlide} size={30} />
      </div>
      <div className="bg-lightest z-10 rounded-full text-darkest absolute top-1/2 -translate-y-1/2 right-2 group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer flex items-center">
        <FaArrowAltCircleRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default HeroSection;
