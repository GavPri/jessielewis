import React from "react";
import servicesData from "../../data/services-data/servicesData";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const ServicesIntro = () => {
  return (
    <div className="max-w-[1240px] bg-transparent m-auto p-6 mb-2 rounded-md">
      <h3 className="font-poppins font-bold text-darkest pb-2 text-4xl text-center">
        Services
      </h3>
      <div className="lg:flex lg:gap-4">
        {servicesData.services.map((service, index) => (
          <div key={index} className="mb-6 bg-dark p-6 rounded-lg mt-2">
            <NavLink to="/services">
              <div className="flex justify-center items-center bg-neutral w-[50%] m-auto min-h-24 rounded-md bg-opacity-50 my-6">
                <p className="text-2xl text-lightest opacity-100">
                  {service.servicesIcon}
                </p>
              </div>
              <h4 className="text-center mb-2 text-xl font-poppins capitalize text-lightest">
                {service.serviceName}
              </h4>
              <p className="text-center mb-2 font-poppins text-light">
                {service.shortServiceIntro}
              </p>
            </NavLink>
            <Button to="/contact" text="Contact Me" className={`m-auto`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesIntro;
