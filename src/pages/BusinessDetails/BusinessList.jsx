import React, { useEffect, useState } from "react";
import Vector from "../../assets/images/Vector.svg";
import search from "../../assets/images/search-list.svg";
import recommend from "../../assets/images/recommend.svg";
import lawn from "../../assets/images/lawn.svg";
import OurListed from "../Home/OurListed";
import { getAllProfiles } from "../../services/bussiness";
import { computeHeadingLevel } from "@testing-library/react";
import { setupAxios } from "../../utils/axiosClient";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import NoData from "../../components/noData/noData";
import ReactPaginate from "react-paginate";
import PaginationItems from "../../components/common/paginataionItems";
import { useDebounce } from "use-debounce";

export default function BusinessList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const category = queryParams.get("category");
  const [text, setText] = useState(name);
  const [value] = useDebounce(text, 1000);
  console.log(name, "cat>>>>>>>>.");
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center my-10 lg:my-16">
          <h2 className="text-[#000000] text-center">
            <span className="text-xl lg:text-2xl block font-bold mb-1">
              All Brands
            </span>
            <span className="text-2xl lg:text-4xl font-light relative">
              <span className="gradient font-black">Top </span> Brand in one
              place
              <img
                className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
                src={Vector}
                alt="arrow"
              />
            </span>
          </h2>
        </div>
        {/* search bar */}
        <div className="relative mb-10">
          <div className="absolute top-3 left-5">
            <img src={search} alt="search" className="cursor-pointer" />
          </div>
          <div className="border-r border-[#FFD4D4] absolute left-20 top-3 h-10 w-1"></div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="py-4 pl-28 pr-6 text-black w-full border-2 border-[#F42A3E] rounded-[10px] placeholder:text-black box-shadow2 focus:outline-none"
            placeholder="Cloths Brands"
          />
        </div>
        <div className="lg:flex justify-between items-center gap-4 my-10">
          <div className=" lg:flex justify-center items-center gap-6">
            <button className="box-shadow2 px-4 py-2 rounded-[10px] hover:bg-[#f42a3e] hover:text-white font-normal text-[15px] hover:font-bold">
              Restaurant
            </button>
            <button className="box-shadow2 px-4 py-2 rounded-[10px] hover:bg-[#f42a3e] hover:text-white font-normal text-[15px] hover:font-bold">
              Cloths
            </button>
            <button className="box-shadow2 px-4 py-2 rounded-[10px] hover:bg-[#f42a3e] hover:text-white font-normal text-[15px] hover:font-bold">
              Dentist
            </button>
            <button className="box-shadow2 px-4 py-2 rounded-[10px] hover:bg-[#f42a3e] hover:text-white font-normal text-[15px] hover:font-bold">
              coffee shop
            </button>
            <button className="box-shadow2 px-4 py-2 rounded-[10px] hover:bg-[#f42a3e] hover:text-white font-normal text-[15px] hover:font-bold">
              More
            </button>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="">
              <h6 className="flex gap-4 font-normal text-xl">
                Sort: <span className="gradient font-bold">Recommended</span>{" "}
                <img src={recommend} alt="recomend" />
              </h6>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className="lg:flex justify-between items-start gap-6 my-10">
          {/* left side */}
          <div className="lg:w-[30%] box-shadow2 p-4 rounded-[10px]">
            {/* clear all */}
            <div className="flex justify-between items-center gap-6">
              <div>
                <h6 className="flex gap-1 font-normal text-xl">
                  <span className="gradient font-bold">Search</span>Filter
                </h6>
              </div>
              <button className="bg-transparent text-black font-normal text-[15px] border-0 focus:outline-none">
                Clear All
              </button>
            </div>
            {/* border */}
            <div className="border-b border-[#FFF4F4] my-6"></div>
            {/* dolar button */}
            <div className="border border-[#f53e40] rounded-[10px] flex w-[100%] ">
              <button className="border-r border-[#F53E40] p-4 text-[15px] w-full hover:text-[#F42A3E]">
                $
              </button>
              <button className="border-r border-[#F53E40] p-4 text-[15px] w-full hover:text-[#F42A3E]">
                $$
              </button>
              <button className="border-r border-[#F53E40] p-4 text-[15px] w-full hover:text-[#F42A3E]">
                $$$
              </button>
              <button className="p-4 text-[15px] w-full hover:text-[#F42A3E]">
                $$$$
              </button>
            </div>
            {/* border */}
            <div className="border-b border-[#FFF4F4] my-6"></div>
            {/* suggested */}
            <div className="">
              <div className="flex justify-between items-center gap-6 mb-4">
                <div>
                  <h6 className="gradient font-bold text-[15px]">Suggested</h6>
                </div>
                <button className="bg-transparent text-[#F42A3E] font-normal text-[15px] border-0 focus:outline-none">
                  See more
                </button>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
            {/* border */}
            <div className="border-b border-[#FFF4F4] my-6"></div>
            {/* suggested */}
            <div className="">
              <div className="flex justify-between items-center gap-6 mb-4">
                <div>
                  <h6 className="gradient font-bold text-[15px]">Suggested</h6>
                </div>
                <button className="bg-transparent text-[#F42A3E] font-normal text-[15px] border-0 focus:outline-none">
                  See more
                </button>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
            {/* border */}
            <div className="border-b border-[#FFF4F4] my-6"></div>
            {/* suggested */}
            <div className="">
              <div className="flex justify-between items-center gap-6 mb-4">
                <div>
                  <h6 className="gradient font-bold text-[15px]">Suggested</h6>
                </div>
                <button className="bg-transparent text-[#F42A3E] font-normal text-[15px] border-0 focus:outline-none">
                  See more
                </button>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
            {/* border */}
            <div className="border-b border-[#FFF4F4] my-6"></div>
            {/* suggested */}
            <div className="">
              <div className="flex justify-between items-center gap-6 mb-4">
                <div>
                  <h6 className="gradient font-bold text-[15px]">Suggested</h6>
                </div>
                <button className="bg-transparent text-[#F42A3E] font-normal text-[15px] border-0 focus:outline-none">
                  See more
                </button>
              </div>
              <div className="">
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
                <div className="flex gap-3 mb-4">
                  <input type="checkbox" className="" />
                  <span className="text-[#999999] text-[15px] leading-tight">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <button className="w-full p-4 bg-color rounded-lg font-medium text-xl text-white">
                22 Result Show
              </button>
            </div>
          </div>

          <PaginationItems itemsPerPage={1} category={category} value={value} />
        </div>

        {/* pagination */}
        {/* <div className="my-10 lg:mt-16 lg:mb-24">
          <nav
            aria-label="Page navigation example"
            className=" flex justify-center"
          >
            <ul className="inline-flex -space-x-px">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 rounded leading-tight bg-color hover-text-[#898989] text-white text-[17px]"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  6
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  8
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-[#898989] text-[17px]"
                >
                  9
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" rounded flex items-center justify-center px-3 h-8 leading-tight bg-color hover-text-[#898989] text-white text-sm lg:text-[17px]"
                >
                  Next Page
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
      <OurListed />
    </>
  );
}
