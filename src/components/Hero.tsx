import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import chairImage from "../../public/img/chair.png";

const Hero = () => {
  return (
    <div className="flex  justify-centermd:w-[1280] h-[584] md:mx-11 md:mt-20">
      <div className=" flex flex-col justify-evenly p-5  bg-[#2A254B] text-slate-50 md:w-[760px] w-full md:h-[584px] md:px-10 overflow-hidden ">
        <div className=" w-full max-w-[450px] h-[90px] space-y-40 md:mb-5 text-3xl leading-loose">
          <h2>The Furniture brand for the future, with timeless designs </h2>
        </div>
        <div
          className="flex flex-col-reverse justify-around md:flex-col
          "
        >
          <div className="mt-20 text-center md:mt-10 md:text-left ">
            {" "}
            <Button />
          </div>
          <div className="w-full max-w-[602px] h-[81px] mt-20 text-sm md:mt-20 md:text-1xl md:leading-loose ">
            <p>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src={chairImage}
          alt="Chair Image"
          className="hidden md:block h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;
