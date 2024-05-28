import React, { useEffect, useState } from "react";
import Vector from "../../assets/images/Vector.svg";
import cloths from "../../assets/images/cloths.svg";
import { getAllCategories } from "../../services/categories";
import { setupAxios } from "../../utils/axiosClient";
import { computeHeadingLevel } from "@testing-library/react";
import Loader from "../../components/Loader/loader";
import NoData from "../../components/noData/noData";

export default function PopularCategories() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    setupAxios();
    try {
      setLoading(false);
      const res = await getAllCategories();
      setCategory(res?.data?.results);
      console.log(res?.data?.results, "res>>>>>>>>");
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container mx-auto py-10 lg:py-6 ">
      <div className="flex justify-center items-center">
        <h2 className="text-[#000000] text-center">
          <span className="text-xl lg:text-2xl block font-bold mb-1">
            {" "}
            Popular categories{" "}
          </span>{" "}
          <span className="text-2xl lg:text-4xl font-semibold relative">
            <span className="gradient font-black"> Browse Top </span> Categories
            <img
              className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
              src={Vector}
              alt="arrow"
            />
          </span>
        </h2>
      </div>
      {category?.length === 0 ? (
        <NoData />
      ) : (
        <div className="grid lg:grid-cols-4 2xl:grid-cols-6 gap-8 py-6 lg:py-10 my-10">
          {loading ? (
            <Loader />
          ) : (
            category?.map((item) => {
              return (
                <div
                  className="bg-white rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10"
                  data-aos="zoom-in"
                >
                  <img src={cloths} alt="cloths" className="mb-4" />
                  <h2 className="text-2xl font-bold mb-1 gradient">
                    {item?.name}
                  </h2>
                  <p className="text-[#9B9B9B] text-[15px] font-medium">
                    607 Listings
                  </p>
                </div>
              );
            })
          )}

          {/* <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div>
        <div className="bg-[white] rounded-[10px] box-shadow2 flex items-center justify-center flex-col p-10">
          <img src={cloths} alt="cloths" className="mb-4" />
          <h2 className="text-2xl font-bold mb-1 gradient">Cloths</h2>
          <p className="text-[#9B9B9B] text-[15px] font-medium">607 Listings</p>
        </div> */}
        </div>
      )}
    </div>
  );
}
