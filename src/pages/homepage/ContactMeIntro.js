import React from "react";
import contactData from "../../data/contact-data/contactData";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const ContactMeIntro = () => {
  return (
    <div className="max-w-[1240px] m-auto p-6 ">
      <h3 className="text-3xl text-darkest pb-2 font-poppins font-extrabold border-b-2 border-b-darkest w-4/6 mb-2">
        Contact Me
      </h3>
      <div className="w-full">
        {contactData.meansOfContact.map((mean, index) => (
          <NavLink to="/contact">
            <div
              key={index}
              className=" mr-auto flex flex-col justify-start items-center text-2xl w-full text-dark bg-transparent mb-4 px-4 py-2 rounded-lg"
            >
              <p className="flex items-center w-full text-3xl mb-2 font-semibold font-poppins">
                <span className="mr-4">{mean.methodIcon}</span> {mean.method}
              </p>

              <p className="w-full font-poppins text-sm font-light">
                {mean.methodInfo}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ContactMeIntro;
