import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="mx-2">
      {aboutMeData.map((t, idx) => (
        <div
          key={idx}
          className="bg-dark mb-6 max-w-readable p-6 m-auto rounded-md"
        >
          <div className="m-auto flex justify-center items-center w-24 mb-4">
            <p className="text-4xl rounded-md bg-neutral bg-opacity-85 text-lightest p-8">
              {t.aboutIcon}
            </p>
          </div>
          <h2 className="font-poppins text-2xl text-center text-lightest">
            {t.title}
          </h2>
          <div className="text-center p-2 md:p-6 m-auto text-light ">
            <p className="font-poppins md:text-xl">{t.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;
