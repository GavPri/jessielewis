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
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto ">
      {/* ----- Title */}
      <div className="mb-4 flex flex-col justify-center items-center">
        <h1 className="text-center text-darkest capitalize font-poppins text-5xl mb-2">
          About Jessie
        </h1>
        {/* ----- Profile picture */}
        <div
          style={divStyle}
          className="w-64 aspect-square rounded-lg m-auto mx-2"
        ></div>
      </div>
      <AboutMeCard />
    </div>
  );
};

export default AboutMe;
