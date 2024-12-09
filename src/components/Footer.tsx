import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2A254B]">
      <div className="text-slate-50 flex gap-36 font-extralight font-serif p-14 leading-loose">
        <div>
          <ul>
            <li>Menu</li>
            <li>New arrivals</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Our company</li>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li> Returns policy</li>
          </ul>
        </div>
        <div className="w-full max-w-[454px] font-light  font-serif  ">
          <h4>Join our mailing list</h4>

          <input
            type="text"
            placeholder="your@email.com"
            className="bg-slate-50 px-8 py-4 flex-grow  "
          />
          <span className="px-4 py-6 rounded-none bg-[#4E4D93] hover:bg-[#797777] duration-1000 text-slate-50 text-center">
            Signup
          </span>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-10">
        <div className="text-slate-50 flex py-10 justify-between font-serif font-extralight">
          <div>Copyright 2022 Avion LTD</div>
          <div className="flex gap-10 text-xl">
            <FaLinkedin />
            <FaFacebook />
            <AiFillInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
