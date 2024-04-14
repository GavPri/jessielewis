import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import servicesData from "../../data/services-data/servicesData";
import Button from "../../components/Button";

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const handleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="max-w-[1240px] m-auto mt-24">
      <div className="lg:flex lg:flex-col max-w-[1240px] justify-center items-center w-full">
        <div className="w-3/4 m-auto text-center">
          <h1 className="text-darkest text-4xl mb-6 font-poppins">Services</h1>
          <p className="font-poppins mb-4 text-xl text-darkest">
            Read about our services below
          </p>
        </div>
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className={`w-3/4 rounded-md m-auto ${
              openAccordion === index
                ? "bg-lightest text-dark"
                : "bg-dark text-lightest"
            }  hover:cursor-pointer mb-4 border-2 border-neutral p-4`}
          >
            <div
              className="flex justify-between items-center relative w-full"
              onClick={() => handleAccordion(index)}
            >
              <h4 className=" text-2xl font-poppins uppercase ml-4">
                {service.serviceName}
              </h4>
              <p
                className={
                  openAccordion === index
                    ? "rotate-45 transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }
              >
                <AiOutlinePlus size={20} className="mr-4" />
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out text-center md:text-left mt-2 px-2 ${
                openAccordion === index ? "max-h-[150vh] mt-2" : "max-h-0"
              }`}
            >
              <p
                className={`font-poppins transition-all duration-300 md:mx-4 mb-4 md:px-4 ml-4 text-left ${
                  openAccordion === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.serviceDescription}
              </p>
              <Button
                to="/contact"
                text="Contact Me"
                className={`ml-6 mb-2 max-w-[50vw]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
