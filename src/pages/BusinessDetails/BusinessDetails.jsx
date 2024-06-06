import React, { useEffect, useState } from "react";
import maria from "../../assets/images/maria.png";
import star from "../../assets/images/star-details.svg";
import world from "../../assets/images/world-2.svg";
import share from "../../assets/images/share.svg";
import save from "../../assets/images/save.svg";
import Vector from "../../assets/images/Vector.svg";
import mariaB from "../../assets/images/maria.b.svg";
import ahmad from "../../assets/images/ahmad.svg";
import fillStar from "../../assets/images/fill-star.svg";
import Rating from "../../assets/images/rating.png";
import OurListed from "../Home/OurListed";
import { useParams } from "react-router-dom";
import {
  addReview,
  getSingleProfiles,
  reviewGet,
} from "../../services/bussiness";
import { setupAxios } from "../../utils/axiosClient";
import Loader from "../../components/Loader/loader";
import { FileUploader } from "react-drag-drop-files";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import StarRatings from "react-star-ratings";
import { RxAvatar } from "react-icons/rx";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Man from "../../assets/images/man.jpg";
export default function BusinessDetails() {
  const { bussiness } = useParams();
  const [base64Image, setBase64Image] = useState("");
  const [review, setReview] = useState("");
  const [loadingReview, setLoadingReview] = useState(false);
  const [profile, setProfile] = useState([]);
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    setupAxios();
    try {
      setLoading(false);
      const res = await getSingleProfiles(bussiness);
      setProfile(res?.data);
    } catch (error) {
      setLoading(false);
    }
  };
  const AddReviews = async (e) => {
    setLoadingReview(true);
    e.preventDefault();
    setupAxios();
    const payload = {
      description: review,
      proof_of_order: base64Image,
      brand_profile: bussiness * 1,
      rating: rating,
    };
    try {
      const res = await addReview(payload);
      toast.success("Review Sent successfully");
      console.log(res);
      setLoadingReview(false);
    } catch (error) {
      console.log(error);
      setLoadingReview(false);
    }
  };
  const getReviews = async (e) => {
    setLoadingReview(true);
    setupAxios();

    try {
      const res = await reviewGet(bussiness * 1);
      setLoadingReview(false);
    } catch (error) {
      setLoadingReview(false);
    }
  };
  const fileTypes = ["PNG", "JPG"];

  useEffect(() => {
    getProfile();
    getReviews();
  }, []);
  const handleChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setFile(file);
  };
  const stack2 = (
    <div className="mt-[14px] bg-[#f4fcfc] w-full h-[142px] flex justify-center items-center rounded-md border-2 border-dotted border-primary">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[36px] h-[36px]">
          <img src="/icons/Upload icon.svg" alt="" />
        </div>
        <div className="text-[12px] font-bold leading-[18px] text-[#0F0F0F]">
          Drag & drop files or <span className="text-primary">Browse</span>
        </div>
        <div className="mt-[10px] text-[10px] 2xl:text-[12px] font-normal leading-[12px] 2xl:leading-[18px] text-[#676767]">
          {file?.name
            ? file?.name
            : "Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT"}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="lg:flex justify-between items-center gap-4 box-shadow my-10 lg:mb-10 lg:mt-20 p-4 lg:py-8 lg:px-16 rounded-[10px]">
            <div className="lg:flex items-center gap-4 mb-6 lg:mb-0">
              <div>
                <img src={profile?.logo} alt="image" className="w-[100px]" />
              </div>
              <div className="">
                <h2 className="text-xl lg:text-4xl font-normal">
                  <span className="font-bold gradient"> {profile?.name}</span>{" "}
                  Cloths{" "}
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
            <div className="flex gap-4 items-center">
              <div className="">
                <img src={world} alt="world" />
              </div>
              <div className="">
                <h2 className="text-[15px] font-light leading-5">
                  Live <span className="font-bold gradient"> Site </span>
                </h2>
                <p className="text-[#666666]">{profile?.website}</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 place-items-center">
            <button className=" flex items-center justify-center box-shadow w-[100%] p-6 rounded-[10px] border-0">
              <span className="flex items-center gap-4">
                <img src={share} alt="save" />
                <span className="text-[#F42A3E] font-bold 2xl:text-2xl">
                  Share
                </span>
              </span>
            </button>
            <button className=" flex items-center justify-center box-shadow w-[100%] p-6 rounded-[10px] border-0">
              <span className="flex items-center gap-4">
                <img src={save} alt="save" />
                <span className="text-[#F42A3E] font-bold 2xl:text-2xl">
                  Save
                </span>
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center my-10 lg:my-16">
            <h2 className="text-[#000000] text-center">
              <span className="text-xl lg:text-2xl block font-bold mb-1">
                Followers
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
          <div className="box-shadow2 py-10 rounded-[10px]">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="pb-6">
                <div className="flex justify-center items-center mb-16">
                  <h2 className="text-[#000000] text-center">
                    <span className="text-xl lg:text-2xl block font-bold mb-1">
                      Brand Maria.b
                    </span>
                    <span className="text-2xl lg:text-4xl font-light relative">
                      <span className="gradient font-black">Facebook </span>{" "}
                      Followers
                      <img
                        className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
                        src={Vector}
                        alt="arrow"
                      />
                    </span>
                  </h2>
                </div>
                <div className="lg:w-[80%] mx-auto box-shadow2 rounded-[10px]">
                  <div className="flex items-center justify-start gap-4 p-4 box-shadow2">
                    <div>
                      <img src={mariaB} alt="image" className="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl lg:text-4xl font-normal text-black">
                        <span className="font-bold"> Maria.B </span> Cloths
                      </h2>
                      <div className="flex items-center gap-2 mt-3 lg:mt-0">
                        <img src={star} alt="star" className="mb-0" />
                        <h6 className="font-normal text-[#8D8D8D]">
                          <span className="font-bold text-black">
                            {" "}
                            34 Reviews{" "}
                          </span>
                          $$$$...
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col py-10">
                    <h2 className="gradient font-black text-xl lg:text-4xl">
                      1,850,000
                    </h2>
                    <p className="font-light text-black">maria.b followers</p>
                  </div>
                </div>
              </div>
              <div className="lg:border-l-2 border-[#FFD4D4] pb-6">
                <div className="flex justify-center items-center mb-16">
                  <h2 className="text-[#000000] text-center">
                    <span className="text-xl lg:text-2xl block font-bold mb-1">
                      Brand Maria.b
                    </span>
                    <span className="text-2xl lg:text-4xl font-light relative">
                      <span className="gradient font-black">instagram </span>
                      Followers
                      <img
                        className="flex justify-end absolute right-0 -bottom-5 h-[28px]"
                        src={Vector}
                        alt="arrow"
                      />
                    </span>
                  </h2>
                </div>
                <div className="lg:w-[80%] mx-auto box-shadow2 rounded-[10px]">
                  <div className="flex items-center justify-start gap-4 p-4 box-shadow2">
                    <div>
                      <img src={mariaB} alt="image" className="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl lg:text-4xl font-normal text-black">
                        <span className="font-bold"> Maria.B </span> Cloths
                      </h2>
                      <div className="flex items-center gap-2 mt-3 lg:mt-0">
                        <img src={star} alt="star" className="mb-0" />
                        <h6 className="font-normal text-[#8D8D8D]">
                          <span className="font-bold text-black">
                            {" "}
                            34 Reviews{" "}
                          </span>
                          $$$$...
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col py-10">
                    <h2 className="gradient font-black text-xl lg:text-4xl">
                      1,850,000
                    </h2>
                    <p className="font-light text-black">maria.b followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-10 lg:my-16">
            <h2 className="text-[#000000] text-center">
              <span className="text-xl lg:text-2xl block font-bold mb-1">
                Reviews
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
          <div className="">
            <h2 className="text-xl lg:text-4xl font-normal mb-6">
              <span className="font-bold gradient"> Recommended </span> Reviews
            </h2>
            <div className="lg:flex justify-between items-center gap-4 box-shadow2 lg:mb-10 p-4 lg:py-8 lg:px-16 rounded-[10px]">
              <div className="flex items-center gap-4">
                <div>
                  <img src={ahmad} alt="image" className="" />
                </div>
                <div className="">
                  <h2 className="text-xl lg:text-2xl">
                    <span className="font-bold gradient"> Muhammad </span>
                  </h2>
                  <div className="flex items-center gap-2 mt-3 lg:mt-0">
                    <h6 className="font-normal text-xl lg:text-2xl">Ahmad</h6>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col justify-end">
                  <div className="flex items-end gap-3 my-3 lg:mt-0">
                    <img src={fillStar} alt="star" className="mb-0" />
                    <h6 className="font-light text-[#737072]">
                      Select Your Rating
                    </h6>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xl lg:text-2xl font-medium inline-block">
                      Start Your review of
                      <span className="font-light gradient"> Maria.B </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-shadow2 my-10 p-4 lg:p-10 rounded-[10px]">
            <div className="lg:flex justify-between items-center gap-6 lg:gap-24">
              <div className="lg:w-[40%] mb-10 lg:mb-0">
                <h3 className="text-xl lg:text-3xl mb-3">
                  <span className="font-black gradient "> Over All </span>
                  <span className=" font-bold">Rating</span>
                </h3>
                <h6 className="text-[#737072] font-normal text-xl lg:text-2xl mb-3">
                  465 reviews
                </h6>
                <p className="text-[#BBBBBB] text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="lg:w-[60%]">
                <div className="flex gap-8 items-center mb-8">
                  <div className="mb-1 text-xl lg:text-2xl font-bold text-[#737072] ">
                    5 Stars
                  </div>
                  <div className="w-[80%] bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-color h-4 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-8 items-center mb-8">
                  <div className="mb-1 text-xl lg:text-2xl font-bold text-[#737072] ">
                    4 Stars
                  </div>
                  <div className="w-[80%] bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-color h-4 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-8 items-center mb-8">
                  <div className="mb-1 text-xl lg:text-2xl font-bold text-[#737072] ">
                    3 Stars
                  </div>
                  <div className="w-[80%] bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-color h-4 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-8 items-center mb-8">
                  <div className="mb-1 text-xl lg:text-2xl font-bold text-[#737072] ">
                    2 Stars
                  </div>
                  <div className="w-[80%] bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-color h-4 rounded-full"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-8 items-center mb-8">
                  <div className="mb-1 text-xl lg:text-2xl font-bold text-[#737072] ">
                    1 Stars
                  </div>
                  <div className="w-[80%] bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-color h-4 rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 lg:my-12">
            <div className="flex justify-between">
              <div className="flex gap-3 items-start">
                <img
                  src={Man}
                  alt="man"
                  className="w-[60px] h-[60px] rounded-full border-[#fb503c]"
                />

                <div>
                  <label className="font-[500]">Kyle.banson</label>
                  <div className="flex items-center gap-[2px]">
                    <CiLocationOn />
                    <small>Lahore, Pakistan</small>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <FaStar color="#FF9800" size={20} />
                    <FaStar color="#FF9800" size={20} />
                    <FaStar color="#FF9800" size={20} />
                    <FaStar color="#FF9800" size={20} />
                    <FaStar color="#FF9800" size={20} />
                  </div>
                  <p className="text-[#888686] mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <p className="text-[#888686]">27 October</p>
              {/* <img src={Rating} alt="rating" className="" /> */}
            </div>
          </div>
          {/* pagination */}
          {/* <div className="my-16">
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

          {/* drop review */}
          <div className="">
            <h3 className="text-xl lg:text-3xl mb-8">
              <span className="font-black gradient "> Drop </span>
              <span className=" font-bold">Reviews</span>
            </h3>
            <div className="box-shadow p-4 lg:p-10 mb-10 lg:mb-20">
              <form className="" onSubmit={AddReviews}>
                <div className="grid lg:grid-cols-1 gap-6 lg:mb-4 mb-4">
                  <div className="w-full ">
                    <label
                      className="block capital text-[#000] text-[15px] mb-2"
                      for="your-name"
                    >
                      Choose Rate
                    </label>
                    {/* <StarRatings
                      rating={rating}
                      starRatedColor="blue"
                      changeRating={(e) => setRating(e)}
                      numberOfStars={6}
                      name="rating"
                    /> */}
                    <input
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="appearance-none box-shadow block w-full bg-transparent text-[#000] border border-[#FF8B49] rounded-[1px] p-4 leading-tight focus:outline-none focus:bg-white"
                      id="your-name"
                      type="number"
                      placeholder="Choose your rating"
                    />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-6 lg:mb-0 mb-4">
                  <div className="w-full mb-6">
                    <label
                      className="block capital text-[#000] text-[15px] mb-2"
                      for="your-email"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-black box-shadow
                  border border-[#FF8B49] rounded-[1px] p-4 leading-tight focus:outline-none focus:bg-white "
                      id="your-email"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="block capital text-[#000] text-[15px] mb-2"
                      for="your-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent text-black box-shadow
                  border border-[#FF8B49] rounded-[1px] p-4 leading-tight focus:outline-none focus:bg-white "
                      id="your-email"
                      type="email"
                      placeholder="Enter Your Mail"
                    />
                  </div>
                </div>
                <FileUploader
                  multiple={false}
                  label="upload here"
                  className="w-full"
                  // className={styles.dragDrop}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  children={stack2}
                />
                <div className="lg:mb-6 mb-10">
                  <label
                    for="message"
                    className="block capital text-[#000] text-[15px] mb-2"
                  >
                    Review
                  </label>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    id="message"
                    rows="4"
                    className="appearance-none block w-full bg-transparent text-black box-shadow
                border border-[#FF8B49] rounded-[1px] p-4 leading-tight focus:outline-none focus:bg-white "
                    placeholder="Write your Review"
                  ></textarea>
                </div>
                {loadingReview ? (
                  <button
                    type="button"
                    className="gradient2 text-xl lg:text-[22px] flex items-center justify-center font-bold h-[60px] w-[200px] rounded-md text-white"
                  >
                    <RotatingLines
                      visible={true}
                      height="32"
                      width="32"
                      strokeColor="#aa2e2e"
                      color="#aa2e2e"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="gradient2 text-xl lg:text-[22px] font-bold h-[60px] w-[200px] rounded-md text-white"
                  >
                    Submit Review
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      <OurListed />
    </>
  );
}
