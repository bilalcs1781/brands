import React from "react";
import footerImg from "../../assets/images/image.png";
import bell from "../../assets/images/bell.svg";
import Vector from "../../assets/images/Vector.svg";
import fb from "../../assets/images/fb.svg";
import twitter from "../../assets/images/twitter.svg";
import vite from "../../assets/images/vite.svg";
import yt from "../../assets/images/yt.svg";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="bg-footer-image bg-no-repeat w-[100%] bg-top bg-cover">
      <div className="container mx-auto relative pt-10 lg:pt-28">
        <div className="flex justify-center items-center w-[100%] ">
          <img
            src={footerImg}
            alt="Footer Image"
            className="h-[250px] lg:h-[auto]"
          />
        </div>
        <div className="p-10 lg:mt-32 text-center absolute inset-0 flex flex-col items-center justify-end lg:justify-center">
          <h4 className="font-bold lg:text-2xl text-xl mb-2">Subscribe Now</h4>
          <h3 className="text-2xl lg:text-4xl">
            <span className="gradient3 font-black">Get All </span> Updates &
            Advanced
            <span className="gradient3 font-black relative">
              <img
                className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
                src={Vector}
                alt="arrow"
              />
              Offer
            </span>
          </h3>
          <div className="flex items-center relative mt-6 lg:mt-10 w-[100%] lg:w-[670px] mx-auto">
            <input
              type="text"
              className="box-shadow text-[15px] focus:outline-none font-medium text-[#464F54] rounded-full px-4 py-5 bg-white w-full"
              placeholder="Find Perfect Business"
            />
            <button className="bg-[#F4293E] text-2xl font-bold px-6 py-4 text-white rounded-r-full absolute right-0 flex gap-2 items-center">
              <img src={bell} className="h-[24px] w-[24px]" alt="bell icon" />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center container mx-auto py-8">
        <ul className=" flex gap-4 items-center mb-6 lg:mb-0">
          <li>
            <a href="#" className="text-[#F42A3E]">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F42A3E]">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F42A3E]">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F42A3E]">
              <Link to="/faqs"> Faqs</Link>
            </a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <div className="">
            <img
              src={fb}
              alt="footer-icon"
              className="transition ease-in-out delay-150  hover:-translate-1 hover:scale-110 duration-200 cursor-pointer"
            />
          </div>
          <div>
            <img
              src={twitter}
              alt="footer-icon"
              className="transition ease-in-out delay-150  hover:-translate-1 hover:scale-110 duration-200 cursor-pointer"
            />
          </div>
          <div>
            <img
              src={vite}
              alt="footer-icon"
              className="transition ease-in-out delay-150  hover:-translate-1 hover:scale-110 duration-200 cursor-pointer"
            />
          </div>
          <div>
            <img
              src={yt}
              alt="footer-icon"
              className="transition ease-in-out delay-150  hover:-translate-1 hover:scale-110 duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mx-4">
        <div className="border-t border-[#C7C7C7]"></div>
      </div>
      <div className="flex justify-between items-center px-4 lg:px-32 mx-auto py-8">
        <ul className=" flex gap-4 items-center">
          <li>
            <a href="#" className="text-[#F42A3E] text-sm">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-[#F42A3E] text-sm">
              <Link to="policy">Privacy Policy</Link>
            </a>
          </li>
        </ul>
        <div className="text-[#F42A3E] text-sm">
          <p>© 2023 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
