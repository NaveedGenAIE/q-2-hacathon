import Image from "next/image";
import lastImg from "../../public/img/last.png";
import React from "react";

const End = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 overflow-hidden w-full">
      {/* Text Section */}
      <div className="max-w-[620px] h-auto md:h-[603px] px-10 py-14 flex-shrink-0">
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
        <div className="mt-10 px-5 py-3 w-[170px] bg-[#4E4D93] hover:bg-[#797777] duration-1000 text-slate-50 text-center md:my-48">
          Get in touch
        </div>
      </div>

      {/* Image Section */}
      <div className="h-auto w-full md:h-[630px] md:w-auto flex justify-center items-center">
        <Image
          src={lastImg}
          alt="lastImg"
          className="h-auto w-full md:h-full md:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default End;
