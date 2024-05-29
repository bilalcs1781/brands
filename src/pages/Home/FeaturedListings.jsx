import React, { useEffect, useState } from "react";
import Vector from "../../assets/images/Vector.svg";
import maria from "../../assets/images/maria.svg";
import star from "../../assets/images/star.svg";
import world from "../../assets/images/world.svg";
import location from "../../assets/images/location.svg";
import mail from "../../assets/images/email.svg";
import heart from "../../assets/images/heart.svg";
import { setupAxios } from "../../utils/axiosClient";
import { getAllProfiles } from "../../services/bussiness";
import Loader from "../../components/Loader/loader";
import NoData from "../../components/noData/noData";
import Aos from "aos";

export default function FeaturedListings() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    setupAxios();
    try {
      setLoading(false);
      const res = await getAllProfiles();
      console.log(res, "res>>>>.");
      setProfile(res?.data?.results);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProfile();
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h2 className="text-[#000000] text-center">
          <span className="text-xl lg:text-2xl block font-bold mb-1">
            {" "}
            Featured Listings{" "}
          </span>{" "}
          <span className="text-2xl lg:text-4xl font-semibold relative ">
            <span className="gradient font-black"> Cloths Goods </span> Business
            <img
              className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
              src={Vector}
              alt="arrow"
            />
          </span>
        </h2>
      </div>
      <div className="w-100 flex-wrap justify-between items-center flex gap-5">
        {profile?.length === 0 ? (
          <NoData />
        ) : loading ? (
          <Loader />
        ) : (
          profile?.map((item) => {
            return (
              <div className="bg-white lg:w-[30%] w-full sm:w-[45%] mt-8  h-full rounded-[10px] box-shadow2 flex max-h-[500px] min-h-[500px] justify-between flex-col px-5 pb-5">
                <div className="">
                  <div className="flex items-center justify-center">
                    <img src={item?.logo} alt="cloths" className="" />
                  </div>
                  <div className="bg-[#FFF8F8] border border-border2 p-6  rounded-[20px]">
                    <div className="flex items-center justify-between gap-4 pt-14">
                      <div className="flex gap-5 items-center">
                        <p className="gradient2 h-[45px] w-[45px] rounded text-xl font-medium text-white flex items-center justify-center">
                          4.6
                        </p>
                        <div className="">
                          <img src={star} alt="star" className="mb-1" />
                          <h4 className="text-[17px] text-[#8D8D8D] font-normal">
                            <span className="text-black font-bold">5.0</span>
                            (34 Reviews)
                          </h4>
                        </div>
                      </div>
                      <a target="_blanck" href={item?.website}>
                        <img src={world} alt="star" className="" />
                      </a>
                    </div>
                  </div>
                  <div className="py-6">
                    <h4 className="text-xl font-normal mb-1">
                      <span className="gradient font-bold"> {item?.name}</span>
                    </h4>
                    <h6 className="text-xl font-normal flex items-center mb-4">
                      <span className="font-semibold"> {item?.country} </span>{" "}
                      <img src={location} alt="location" className="ps-1" />
                    </h6>
                    <p className="text-[#8A8A8A] text-[17px]">
                      {item?.description?.length > 70
                        ? `${item?.description?.substring(0, 70)}...`
                        : item?.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="border-b border-[#E9E9E9] border-dashed"></div>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <p className="font-normal text-black text-xl lg:text-2xl">
                        <span className="gradient">{item?.name}</span>
                        <span className="font-bold"> </span>
                      </p>
                    </div>
                    <div className=" flex gap-4 items-center">
                      <a href={item?.mail} target="_balnck">
                        <img src={mail} alt="star" className="" />
                      </a>
                      <img src={heart} alt="star" className="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
