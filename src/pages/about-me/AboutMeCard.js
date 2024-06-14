import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";
import { useInView } from "react-intersection-observer";

const AboutMeCard = () => {
  return (
    <div className="mx-2">
      {aboutMeData.map((t, idx) => (
        <AboutMeCardContent key={idx} data={t} />
      ))}
    </div>
  );
};

const AboutMeCardContent = ({ data }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-dark opacity-0 mb-6 max-w-readable p-6 m-auto rounded-md ${
        inView ? "fade-in" : ""
      }`}
    >
      <div className="m-auto flex justify-center items-center w-24 mb-4">
        <p className="text-4xl rounded-md bg-neutral bg-opacity-85 text-lightest p-8">
          {data.aboutIcon}
        </p>
      </div>
      <h2 className="font-poppins text-2xl text-center text-lightest">
        {data.title}
      </h2>
      <div className="text-center p-2 md:p-6 m-auto text-light ">
        <p className="font-poppins md:text-xl">{data.content}</p>
      </div>
    </div>
  );
};

export default AboutMeCard;
