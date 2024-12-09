import Image from "next/image";
import aboutProduct from "../../public/img/about-3.png";
import aboutImg from "../../public/img/about-4.png";
import React from "react";
import Button from "./Button";

const AboutCart = () => {
  return (
    <div className="bg-[#F9F9F9] px-6 md:px-24 font-serif font-extralight">
      {/* Header */}
      <div className="py-8 md:py-24 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl">Your shopping cart</h1>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-6 border-b py-5">
        {/* Table Header */}
        <div className="hidden md:flex justify-between border-b-2 pb-2">
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Image
              src={aboutProduct}
              alt="About Product"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded"
            />
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="font-bold">Graystone Vase</div>
              <p className="text-sm text-gray-600 max-w-[250px]">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <div>£85</div>
            </div>
          </div>
          <div className="w-full md:w-auto text-left md:text-center">1</div>
          <div className="font-bold">£85</div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Image
              src={aboutImg}
              alt="About Image"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded"
            />
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="font-bold">Basic White Vase</div>
              <p className="text-sm text-gray-600 max-w-[250px]">
                Beautiful and simple, this is one for the classics.
              </p>
              <div>£85</div>
            </div>
          </div>
          <div className="w-full md:w-auto text-left md:text-center">1</div>
          <div className="font-bold">£85</div>
        </div>
      </div>

      {/* Subtotal and Taxes */}
      <div className="text-center md:text-right my-6 leading-8">
        <div>
          Subtotal: <span className="font-bold">£170</span>
        </div>
        <div className="text-sm text-gray-500">
          Taxes and shipping are calculated at checkout.
        </div>
      </div>

      {/* Checkout Button */}
      <div className="text-center md:text-right py-3 pb-10">
        <button className="bg-[#4E4D93] px-8 py-3 text-white font-medium rounded hover:bg-[#797777] transition duration-300">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default AboutCart;
