import React from "react";
import jessiebanner from "../../images/jessiebanner.png";
import AboutMeCard from "./AboutMeCard";
import { FaArrowAltCircleDown } from "react-icons/fa";


const AboutMe = () => {
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
          
            <div className="opacity-0 w-64 aspect-square mt-auto bg-dark mx-auto absolute bottom-32 left-0 right-0 flex justify-center flex-col items-center rounded-md">
              <p className="mb-12 font-poppins text-light text-3xl">About Me</p>
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
