import React from "react";
import Vector from "../../assets/images/Vector.svg";
import brandsIcon from "../../assets/images/brands-icon.svg";
import search from "../../assets/images/search.svg";
import frame from "../../assets/images/frame.svg";

export default function HeroSection() {
  return (
    <div className="container mx-auto" data-aos="zoom-in">
      <div className="grid lg:grid-cols-2 place-items-center gap-4 py-16 lg:py-0">
        <div className="">
          <div className="flex">
            <h2 className="text-5xl lg:text-6xl 2xl:text-7xl mb-6 lg:mb-8 lg:w-[90%]">
              <span className="font-normal block">Explore All </span>
              <span className="font-bold gradient inline-block relative pt-10">
                <img
                  className="flex justify-end absolute right-0 top-0"
                  src={Vector}
                  alt="arrow"
                />
                Available
              </span>{" "}
              listings
            </h2>
            <div className="lg:w-[16%] hidden lg:block lg:-mr-10">
              <img src={frame} alt="" />
            </div>
          </div>
          <p className="text-[#464F54] text-2xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex items-center relative mb-8">
            <input
              type="text"
              className="box-shadow text-[15px] focus:outline-none font-medium text-[#464F54] rounded-full px-4 py-5 bg-white w-full border border-white"
              placeholder="Find Perfect Business"
            />
            <button className="bg-[#F4293E] text-2xl font-bold px-6 py-4 text-white rounded-r-full absolute right-0 flex gap-2 items-center">
              <img
                src={search}
                className="h-[24px] w-[24px]"
                alt="search icon"
              />
              Search
            </button>
          </div>
          <h4 className="text-[17px] text-[#464F54] font-semibold">
            <span className="font-bold text-[#000000]">Popular:</span> Web
            Agency, Seo Company, Development Agency....
          </h4>
        </div>
        <div className="">
          <img
            className="flex items-center w-full"
            src={brandsIcon}
            alt="brands icon"
          />
        </div>
      </div>
    </div>
  );
}
