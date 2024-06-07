import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { setupAxios } from "../../../utils/axiosClient";
import { getAllProfiles } from "../../../services/bussiness";
import Loader from "../../Loader/loader";
import NoData from "../../noData/noData";
import { Link } from "react-router-dom";
import star from "../../../assets/images/star-details.svg";

const PaginationItems = ({ itemsPerPage, category, value }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  //   const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % profile?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const getProfile = async () => {
    setupAxios();
    try {
      setLoading(true);
      const res = await getAllProfiles(
        category,
        currentPage + 1,
        itemsPerPage,
        value
      );
      setTotal(res?.data?.count);
      setProfile(res?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProfile();
  }, [currentPage, value]);
  console.log(currentPage, "page>>>>>>>>>.");
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = profile?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);
  console.log(profile.length, "length>>>>>>.");
  useEffect(() => {
    const endOffset = +itemsPerPage * +currentPage + +itemsPerPage;
    const itemOffset = +itemsPerPage * +currentPage;
    // setCurrentItems(profile?.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(profile?.length / itemsPerPage));
  }, [itemsPerPage, loading, profile, currentPage]);
  // Invoke when user click to request another page.
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % profile.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };
  console.log(profile, ">>>>>>>>>");
  return (
    <div>
      <div className="lg:w-[70%] ">
        {loading ? (
          <Loader />
        ) : profile?.length === 0 ? (
          <NoData />
        ) : (
          currentItems?.map((item) => {
            return (
              <div className="flex justify-between items-center gap-6 px-6 box-shadow2 py-4 rounded-[10px] mb-6">
                <div className="lg:flex items-center gap-4 mb-6 lg:mb-0">
                  <div className="">
                    <img
                      src={item?.logo}
                      alt="maria"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl lg:text-4xl font-normal">
                      <span className="font-bold gradient"> {item?.name}</span>{" "}
                    </h2>
                    <div className="flex items-center gap-2 mt-3 lg:mt-0">
                      <img src={star} alt="star" className="mb-0" />
                      <h6 className="font-normal text-[#8D8D8D]">
                        <span className="font-bold text-black">5.0 </span> (34
                        Reviews)
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link to={`/business-details/${item?.id}`}>
                    <button className="w-full px-8 py-2 bg-color rounded-md font-bold text-[17px] text-white">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
      {console.log(pageCount, "count>>>>>")}
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"item pagination-page "}
        pageRangeDisplayed={5}
        previousClassName={"item previous"}
      />
    </div>
  );
};

export default PaginationItems;
