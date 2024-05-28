import React from "react";
import { useState } from "react";
import faq from "../../assets/images/faq.png";
import { Collapse, initTWE } from "tw-elements";

export default function index() {
  initTWE({ Collapse });
  return (
    <div>
      <div className="bg-contact-image bg-cover bg-no-repeat bg-center -mt-28 lg:-mt-16 lg:h-[513px] overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6 place-items-center pb-10 lg:pb-0">
            <div className="mt-32 lg:mt-0">
              <h2 className="mb-4 lg:pt-0">
                <span className="text-6xl lg:text-7xl font-normal ">
                  <span className="gradient font-extrabold">FAQs </span>
                </span>
              </h2>
              <p className="text-[#464F54] lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="lg:pt-20">
              <img src={faq} alt="post Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 container">
        <div id="accordionExample">
          <div className="rounded-lg mb-6 box-shadow2 bg-white ">
            <h2 className="mb-0 " id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className="text-[#7B7B7B] font-medium text-xl  lg:text-3xl">
                  What is UX design?
                </span>
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="!visible"
              data-twe-collapse-item
              data-twe-collapse-show
              aria-labelledby="headingOne"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-3 text-xl text-black">
                UX design stands for User Experience design. It is the process
                of designing digital or physical products that are easy to use,
                intuitive, and enjoyable for the user.
              </div>
            </div>
          </div>
          <div className="rounded-lg mb-6 box-shadow2 bg-white">
            <h2 className="mb-0" id="headingTwo">
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span className="text-[#7B7B7B] font-medium text-xl  lg:text-3xl">
                  What are the key principles of UX design?
                </span>
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingTwo"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-3 text-xl text-black">
                UX design stands for User Experience design. It is the process
                of designing digital or physical products that are easy to use,
                intuitive, and enjoyable for the user.
              </div>
            </div>
          </div>
          <div className="rounded-lg mb-6 box-shadow2 bg-white">
            <h2 className="accordion-header mb-0" id="headingThree">
              <button
                className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <span className="text-[#7B7B7B] font-medium text-xl  lg:text-3xl">
                  What is the difference between UX and UI design?
                </span>
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingThree"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-3 text-xl text-black">
                UX design stands for User Experience design. It is the process
                of designing digital or physical products that are easy to use,
                intuitive, and enjoyable for the user.
              </div>
            </div>
          </div>
          <div className="rounded-lg mb-6 box-shadow2 bg-white">
            <h2 className="accordion-header mb-0" id="headingFour">
              <button
                className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <span className="text-[#7B7B7B] font-medium text-xl  lg:text-3xl">
                  What is a wireframe?
                </span>
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingFour"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-3 text-xl text-black lg:max-w-6xl">
                UX design stands for User Experience design. It is the process
                of designing digital or physical products that are easy to use,
                intuitive, and enjoyable for the user.
              </div>
            </div>
          </div>
          <div className="rounded-lg mb-6 box-shadow2 bg-white">
            <h2 className="accordion-header mb-0" id="headingFive">
              <button
                className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <span className="text-[#7B7B7B] font-medium text-xl  lg:text-3xl">
                  What is user testing?
                </span>
                <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingFive"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-3 text-xl text-black lg:max-w-6xl">
                UX design stands for User Experience design. It is the process
                of designing digital or physical products that are easy to use,
                intuitive, and enjoyable for the user.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
