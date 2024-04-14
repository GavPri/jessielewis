import React from "react";
import FaqsAccordion from "./FaqsAccordion";
import Button from "../../components/Button";

const Faqs = () => {

  return (
    <div className="mt-24 max-w-[1240px] m-auto h-fit p-6 md:flex md:justify-around rounded-md">
      {/* text */}
      <div className="md:w-8/12 w-full text-left md:flex md:flex-col md:mr-2">
        <h1 className="font-poppins font-extrabold text-2xl md:text-4xl text-darkest mb-2">
          Frequently Asked Questions
        </h1>
        <div className="h-60vh">
          <FaqsAccordion />
          <p className="font-poppins mb-4 text-darkest">
            Didn't find the answers that you were looking for? Press the button
            bellow to contact me!
          </p>
          <Button to="/contact" text="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
