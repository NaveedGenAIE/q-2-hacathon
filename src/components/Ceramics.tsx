import Image from "next/image";
import photoImg from "../../public/img/Photo.png";
import photo1Img from "../../public/img/Photo (1).png";
import parentImg from "../../public/img/Parent.png";
import lampImg from "../../public/img/lamp.png";
import React from "react";
import chairImage from "../../public/img/chair.png";
import Button from "./Button";

const Ceramics = () => {
  return (
    <div className="flex flex-col gap-8 mt-48 mx-10">
      <div className="text-4xl font-sans font-light">
        <h3>New Ceramics</h3>
      </div>
      <div className="grid grid-cols-none place-content-center gap-10  md:flex  md:gap-4 ">
        <div className="flex flex-col gap-8 w-[300px] h-[462px]  font-light  transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={photoImg} alt="photoImg" />
          </div>
          <div className="leading-loose text-xl">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[300px] h-[462px]  font-light  transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={photo1Img} alt="photo1Img" />
          </div>
          <div className="leading-loose text-xl">
            <p>Rustic vase set</p>
            <p>£155</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[300px] h-[462px]  font-light  transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={parentImg} alt="parentImg" />
          </div>
          <div className="leading-loose text-xl">
            <p>The silky vase</p>
            <p>£125</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[300px] h-[462px]  font-light  transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={lampImg} alt="lampImg" />
          </div>
          <div className="leading-loose text-xl">
            <p>The lucky lamp</p>
            <p>£399</p>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <Button />
      </div>
    </div>
  );
};

export default Ceramics;
