import React from "react";
import HeroSection from "./HeroSection";
import ServicesIntro from "./ServicesIntro";

const HomePage = () => {
  return (
    <div className="mt-24">
      <div className="mb-2">
        <HeroSection />
      </div>
      <div>
        <ServicesIntro />
      </div>
    </div>
  );
};

export default HomePage;
