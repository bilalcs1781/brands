import React from "react";
import brandLogo from "../../assets/images/brand-logo.svg";
import forwardImg from "../../assets/images/forward.svg";
import { useState } from "react";
import { Link, Router } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-[#ffffff] shadow-lg relative z-50 ">
        <div className="flex flex-wrap items-center justify-between mx-auto py-6 h-24 container">
          <div className="flex items-center gap-16">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={brandLogo} className="h-8" alt="Brand Logo" />
            </a>
            <ul className="hidden md:flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white font-extrabold text-[18px] rounded md:bg-transparent md:text-[#F4293E]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="relative">
                  <button
                    className=" flex items-center py-2 px-3 md:p-0 text-[#464F54] font-medium text-[18px] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    About
                    <svg
                      className="-mr-1 ml-2 h-5 w-5 hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      className="absolute right-0 mt-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Link to="businessList"> BusinessList</Link>
                        </div>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Option 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Option 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#464F54] font-medium text-[18px] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to=""> Services</Link>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#464F54] font-medium text-[18px] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to="/businessList"> Bussiness List</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#464F54] font-medium text-[18px] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to="/contact"> Contact</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex gap-4">
              {token ? (
                <button
                  onClick={() => handleLogout()}
                  type="button"
                  className="text-black flex gap-2 items-center bg-transparent focus:outline-none font-medium rounded-lg lg:text-[18px] px-4 py-2 text-center"
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  className="text-black flex gap-2 items-center bg-transparent focus:outline-none font-medium rounded-lg lg:text-[18px] px-4 py-2 text-center"
                >
                  <Link className="flex gap-2" to="/signin">
                    <img src={forwardImg} alt="forwarding" /> SignIn
                  </Link>
                </button>
              )}

              <button
                type="button"
                className="text-white bg-[#F4293E] hover:bg-[#000000] hover:text-[#ffffff] focus:ring-4 focus:outline-none font-bold rounded-lg lg:text-[18px] px-4 py-2 text-center "
              >
                <Link to="/contact"> Contact</Link>
              </button>
            </div>
            <button
              onClick={toggleMobileMenu}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* mobile view */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-[100%] bg-white box-shadow mt-2`}
          >
            <div
              className="items-center justify-between w-full md:flex md:w-auto  "
              id="navbar-cta"
            >
              <ul className="md:hidden flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-[#464F54] dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-[#F4293E] md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="relative">
                    <button
                      className=" flex items-center py-2 px-3 md:p-0 text-[#464F54] font-medium text-[18px] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      About
                      <svg
                        className="-mr-1 ml-2 h-5 w-5 hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className="absolute right-0 mt-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-1">
                          <a
                            href="businessList"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Link to="businessList"> BusinessList</Link>
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About 2
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            About 3
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-[#464F54] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Link to=""> Services</Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-[#464F54] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Link to="/businessList"> Bussiness List</Link>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-[#464F54] rounded  md:hover:bg-transparent md:hover:text-[#F4293E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <Link to="/contact"> Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
