import React from "react";
import {Link} from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full  z-10 bg-blue-400 ">
      <div className="container m-auto flex  justify-between items-center py-4 px-6 md:px-20 lg:px-32 gap-4">
        <img
          src={assets.client}
          alt="navbar-logo"
          className="w-32 h-12 flex-shrink-0 cursor-pointer rounded"
        />
        {/* <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:text-grey-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-grey-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-grey-400">
            Employer
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-grey-400">
          Job Opportunities
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-grey-400">
          Blog
          </a>
        </ul> */}
        <ul className="hidden md:flex flex-nowrap items-center gap-x-6 text-white whitespace-nowrap">
          {/* Home */}
          <li className="relative group">
            <Link to="/" className="cursor-pointer hover:text-black">
              Home
            </Link>
          </li>

          {/* About */}
          <li className="relative group">
            <Link to="CompanyOverview" className="cursor-pointer hover:text-black">
              About Us +
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link
                to="/CompanyOverview"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-green-400"
                
              >
                Company Overview
              </Link>
              <Link
                to="/LeadershipTeam"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-green-400"
              >
                Leadership Team
              </Link>
            </div>
          </li>

          {/* Employer */}
          <li className="relative group">
            <Link to="/SubmitRequirement" className="cursor-pointer hover:hover:text-black">
              Employer +
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link
                to="/SubmitRequirement"
                className="block px-4 py-2 hover:bg-gray-100  hover:text-green-400"
              >
                Submit Requirement
              </Link>
              <Link
                to="/ServiceOffer"
                className="block px-4 py-2 hover:bg-gray-100  hover:text-green-400"
              >
                Services We Offer
              </Link>
            </div>
          </li>

          {/* Job Opportunities */}
          <li className="relative group">
            <Link
              to="/SubmitResume"
              className="cursor-pointer hover:hover:text-black"
            >
              Job Opportunities +
            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link
                to="/SubmitResume"
                className="block px-4 py-2 hover:bg-gray-100  hover:text-green-400"
              >
                Submit Your CV
              </Link>
              <Link
                to="/Opportunities"
                className="block px-4 py-2 hover:bg-gray-100  hover:text-green-400"
              >
                Job Opportunities
              </Link>
            </div>
          </li>

          {/* Blog */}
          {/* <li className="relative group"> */}
            {/* <Link
              to="Posts"
              className="cursor-pointer hover:text-gray-400"
            >
              Blog
            </Link> */}
            {/* <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link
                to="/LatestPosts"
                className="block px-4 py-2 hover:bg-gray-100   hover:text-green-400"
              >
                Latest Posts
              </Link>
              <Link
                to="/Categories"
                className="block px-4 py-2 hover:bg-gray-100  hover:text-green-400"
              >
                Categories
              </Link>
            </div> */}
          {/* </li> */}
          <li>
            <Link to="/Contact" className="cursor-pointer  hover:hover:text-black">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/SubmitResume"
              className="cursor-pointer h-[40px]  px-4 bg-transparent hover:bg-gray-500 
              hover:text-white rounded transition-all duration-300 flex items-center border border-white-500"
            >
              Submit Your CV
            </Link>
          </li>
          <li>
            <Link
             to="/SubmitRequirement"
              className="cursor-pointer h-[40px]  px-4 bg-transparent hover:bg-gray-500 
              hover:text-white rounded transition-all duration-300 flex items-center border border-white-500"
            >
              Submit Requirement
            </Link>
          </li>
        </ul>

        {/* <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Search
        </button> */}
        <div className="hidden md:flex items-center bg-white px-3 py-1.5 rounded-full  w-40 flex-shrink-0">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent w-full px-2 text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 cursor-pointer "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
        />
      </div>

      {/* ------------- Mobile-Menu-------------- */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 
      overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-fll inline-block"
          >
            About Us
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Employer
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Job Opportunities
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Blogs
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Contact
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Submit Resume
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Submit Requirement
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
