import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import notification from "../Images/Ring.png";
import dots from "../Images/dots.png";

const Navbar = ({ postsNumber }) => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-cyan-50 shadow font-poppins">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div className="flex items-center md:block">
          <Link to="/">
            <div className="flex flex-row items-center">
              <img src={Logo} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
              <h2 className="text-3xl text-bold m-4 ml-3 font-medium">
                Arbit Blog
              </h2>
            </div>
          </Link>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
              Posts for User:<b> {postsNumber}</b>
            </li>
            <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
              <img
                src={notification}
                alt="notification"
                width="40"
                height="40"
              />
            </li>
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
                </button>
                <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
