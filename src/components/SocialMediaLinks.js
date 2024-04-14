import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const SocialMediaLinks = () => {
  return (
    <ul className="w-5/6 flex justify-between font-poppins text-light font-bold p-4">
      <li className="mr-2 flex justify-center items-center hover:text-tealAccent hover:cursor-pointer">
        Instagram
        <span className="ml-2">
          <AiOutlineInstagram />
        </span>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
