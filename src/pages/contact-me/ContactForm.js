import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // Email.js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_trpldyl",
        "template_l5shn9r",
        form.current,
        "-3M2v6NWT1JwGRka6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // ----- End of email.js
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    window.location.href = "/";
  };

  return (
    <div className="max-w-[800px] m-auto mt-24 py-4 rounded-md">
      <h1 className="text-4xl text-darkest px-6 flex items-center justify-start font-poppins mb-4">
        Contact Me
        <span className="ml-4">
          <AiOutlineMail />
        </span>
      </h1>
      <form
        className="m-auto p-6 bg-dark text-light mx-2 rounded-md"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="max-w-full mb-4">
          <label htmlFor="user_name">Your full name:</label>
          <input
            required
            type="text"
            placeholder="Your full name"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            name="user_name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="user_email">Your email:</label>
          <input
            required
            type="text"
            placeholder="Email address"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            name="user_email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="service">Service Enquiry:</label>
          <select
            required
            name="service"
            value={formData.services}
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-1/2"
            onChange={handleInputChange}
          >
            <option value="">Please select a topic</option>
            <option value="1-1 coaching">1-1 coaching</option>
            <option value="Teams & Organizations">Teams & Organizations</option>
            <option value="Speaking Engagements">Speaking Engagements</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="max-w-full mb-4">
          <label htmlFor="message">Your Question:</label>
          <textarea
            required
            name="message"
            className="py-2 px-4 rounded-md font-poppins text-darkest min-w-full"
            placeholder="Your question..."
            minLength={16}
            wrap="hard"
            rows={7}
            cols={20}
            value={formData.question}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded-md font-poppins hover:button-hover transition-all duration-500 button active:button-drop"
          onSubmit={handleSubmit}
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
