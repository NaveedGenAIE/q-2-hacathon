import React from "react";
import Button from "./Button";

const AboutSignUp = () => {
  return (
    <div className="h-[481px] bg-[#F9F9F9] px-16 py-12">
      <div className="grid place-content-center h-auto min-h-[364px] bg-[#FFFFFF]">
        <div className="flex flex-col gap-20 items-center px-14">
          <div className="flex flex-col gap-10 text-[#4E4D93] items-center text-center">
            <h3 className="text-4xl font-sans font-light">
              Join the club and get the benefits
            </h3>
            <p className="font-sans font-light w-full max-w-[460px]">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="w-full max-w-[454px] flex items-center gap-2">
            <input
              type="text"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] px-4 py-2 flex-grow"
            />
            <span className="px-4 py-2 bg-[#4E4D93] hover:bg-[#797777] duration-1000 text-slate-50 text-center">
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSignUp;
