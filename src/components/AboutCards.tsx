import Image from "next/image";
import deliveryImage from "../../public/img/delivery.png";
import checkImage from "../../public/img/check.png";
import purchaseImg from "../../public/img/Purchase.png";
import sprutImg from "../../public/img/Sprout.png";
import React from "react";

const AboutCards = () => {
  return (
    <div
      className="flex 
    flex-col gap-10 mt-16  mx-10 leading-loose text-slate-500"
    >
      <div className="text-center text-3xl text-slate-500 font-serif ">
        <h3>What makes our brand different</h3>
      </div>
      <div
        className="flex flex-wrap
      gap-8"
      >
        <div>
          <div className="w-full h-[124px] md:w-[270px] md:h-[124px] ">
            <div className="leading-loose">
              <Image src={deliveryImage} alt="Delivery" />
            </div>
            <div>
              <h3 className="text-slate-800 text-xl leading-loose">
                Next day as standard
              </h3>
            </div>
            <div className="w-[280px] h-[48px] leading-5">
              <p>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[124px]">
            <div className="leading-loose">
              <Image src={checkImage} alt="checkImage" />
            </div>
            <div>
              <h3 className="text-slate-800 text-xl leading-loose">
                Made by true artisans
              </h3>
            </div>
            <div className="w-[280px] h-[48px] leading-5">
              <p>
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[124px]">
            <div className="leading-loose">
              <Image src={purchaseImg} alt="purchaseImg" />
            </div>
            <div>
              <h3 className="text-slate-800 text-xl leading-loose">
                Unbeatable prices
              </h3>
            </div>
            <div className="w-[280px] h-[48px] leading-5">
              <p>
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[270px] h-[124px]">
            <div className="leading-loose">
              <Image src={sprutImg} alt="sprutImg" />
            </div>
            <div>
              <h3 className="text-slate-800 text-xl leading-loose">
                Recycled packaging
              </h3>
            </div>
            <div className="w-[280px] h-[48px] leading-5">
              <p>
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
