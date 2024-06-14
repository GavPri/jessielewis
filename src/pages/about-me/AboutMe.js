import React from "react";
import jessiebanner from "../../images/jessiebanner.png";
import AboutMeCard from "./AboutMeCard";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  // --- Ref for use in view
  const { ref: FadeInAnimation, inView: ElementIsVisible } = useInView();
  // ---- Profile picture
  const divStyle = {
    backgroundImage: `url(${jessiebanner})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto ">
      {/* ----- Title */}
      <div className="mb-4 flex flex-col justify-center items-center">
        {/* ----- Profile picture */}
        <div
          style={divStyle}
          className="h-dvh w-dvw aspect-square rounded-lg m-auto mx-2"
        >
          {/* --- scroll indicator */}

          <div
            ref={FadeInAnimation}
            className={`opacity-0 w-full bg-darkest bg-opacity-50 mt-auto mx-auto absolute bottom-24 left-0 right-0 flex justify-center flex-col items-center rounded-md ${
              ElementIsVisible ? "fade-in" : ""
            }`}
          >
            <h1 className="mb-12 font-poppins text-lightest text-3xl">
              About Me
            </h1>
            <FaArrowAltCircleDown
              size={60}
              className="animate-bounce text-light"
            />
          </div>
        </div>
      </div>
      <AboutMeCard />
    </div>
  );
};

export default AboutMe;
