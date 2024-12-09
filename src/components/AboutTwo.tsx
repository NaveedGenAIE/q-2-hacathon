import Image from "next/image";
import aboutTwoImg from "../../public/img/about-2.png";
import React from "react";

const AboutTwo = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F9F9F9] mt-16 md:h-[603px]">
      <div className="w-full md:w-[50%]">
        <Image
          src={aboutTwoImg}
          alt="aboutTwoImg"
          className="w-full h-[300px] md:h-[550px] object-cover"
        />
      </div>
      <div className="w-full md:w-[50%] px-5 md:px-10 py-14">
        <h3 className="text-2xl text-[#4E4D93] font-serif font-light">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <div className="flex flex-col gap-7 mt-6">
          <p className="text-slate-500">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-slate-500 font-serif">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="mt-10 px-5 py-3 w-[170px] bg-[#4E4D93] hover:bg-[#797777] duration-1000 text-slate-50 text-center mx-auto md:my-48">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
