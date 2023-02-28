import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
// import LanguageButton from './LanguageButton';
import Logo from "../Images/Logo.svg";
import notification from "../Images/Ring.png";
import dots from "../Images/dots.png";

const Navbar = () => {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);
  const [showAboutInResponsive, setShowAboutInResponsive] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const userIds = Array.from(new Set(posts.map((post) => post.userId)));

  return (
    <nav className="w-full sticky top-0 z-50 bg-cyan-50 shadow font-poppins">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div className="flex items-center md:block">
          <div className=" md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border"
              onClick={() => setShowNavbarInResponsive(!showNavbarInResponsive)}
            >
              {showNavbarInResponsive ? (
                <svg
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* <Link to="/"> */}
          <div className="flex flex-row items-center">
            <img src={Logo} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
            <h2 className="text-3xl text-bold m-4 ml-3 font-medium">
              Arbit Blog
            </h2>
          </div>
          {/* </Link> */}
        </div>
        <div
          className={`flex-1 justify-self-center bg-cyan-50 pt-4 pl-4 h-full text-base left-[-250px]  transition duration-300 transform fixed w-[250px] z-50 pb-3 md:block md:pb-0 md:mt-0 ${
            showNavbarInResponsive
              ? "translate-x-full "
              : "translate-x-[-250px]"
          }`}
        >
          <div className="mt-3 space-y-2 lg:hidden md:hidden ">
            <div className="flex flex-col items-start  text-xl ">
              <ul className="items-center justify-center  md:flex md:space-x-6 md:space-y-0">
                <li className="w-fit p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                  <a href="Home">Posts</a>
                </li>
                <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                  <img
                    src={notification}
                    alt="notification"
                    width="40"
                    height="40"
                  />
                </li>
                <li className="w-fit p-2 m-0 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                  <img src={dots} alt="dots" width="40" height="40" />
                </li>
                <li className="w-fit hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                  <div className=" relative  absolute">
                    <button
                      type="button"
                      className="flex peer text-black hover:text-indigo-100 p-2"
                      onClick={() =>
                        setShowAboutInResponsive(!showAboutInResponsive)
                      }
                    >
                      About
                      <AiFillCaretDown className=" mt-1 ml-2" />
                    </button>
                    {showAboutInResponsive ? (
                      <div className="flex relative peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                        <a
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          href="About"
                        >
                          About Us
                        </a>
                        <a
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          href="Team"
                        >
                          Our Team
                        </a>
                        <a
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          href="Careers"
                        >
                          Careers
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <Link to="/">
            <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
              Posts
            </li>
            </Link>
            {/* <Link to="blog"> */}
            <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
              <img
                src={notification}
                alt="notification"
                width="40"
                height="40"
              />
            </li>
            {/* </Link> */}
            <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
              <img src={dots} alt="dots" width="40" height="40" />
            </li>
            <li className="hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
              <div className="relative absolute">
                <button
                  type="button"
                  className="flex peer text-black hover:text-indigo-100 p-2"
                >
                  Users
                  <AiFillCaretDown className="mt-1 ml-2" />
                </button>

                <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                  {userIds.map((userId) => (
                    <Link className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100" key={userId} to={`/?userId=${userId}`}>
                     
                        USER ID: {userId}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
