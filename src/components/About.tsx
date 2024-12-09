import React from "react";
import Button from "./Button";
import Image from "next/image";
import aboutImg from "../../public/img/about-1.png";
const About = () => {
  return (
    <div className="mx-5 md:mx-24">
      <div className="flex flex-col md:flex-row justify-between mt-20 mb-24">
        <div className="max-w-full md:max-w-[600px] mb-6 md:mb-0 leading-loose font-extralight font-serif">
          <h1 className="text-2xl md:text-3xl">
            A brand built on the love of craftsmanship, quality, and outstanding
            customer service
          </h1>
        </div>
        <div>
          <Button />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col justify-evenly p-5 bg-[#2A254B] text-slate-50 md:w-[634px] w-full md:h-[478px] md:px-10 overflow-hidden font-serif font-extralight">
          <div className="w-full max-w-[450px] h-[90px] space-y-4 mb-5 text-2xl md:text-3xl leading-loose">
            <h2>The Furniture brand for the future, with timeless designs</h2>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div className="mt-10 md:mt-10 text-center md:text-left">
              <Button />
            </div>
            <div className="w-full max-w-[602px] h-[81px] mt-10 text-sm md:text-base md:leading-loose">
              <p>
                A new era in eco-friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors, and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[634px] h-[478px]">
          <Image
            src={aboutImg}
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
