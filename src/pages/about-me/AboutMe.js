import React from "react";
import jessiebanner from "../../images/jessiebanner.png";
import AboutMeCard from "./AboutMeCard";

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
          <div className="w-64 aspect-square mt-auto bg-darkest mx-auto absolute bottom-24 left-0 right-0"></div>
        </div>
      </div>
      <AboutMeCard />
    </div>
  );
};

export default AboutMe;
