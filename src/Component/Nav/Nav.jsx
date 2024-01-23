import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Shared/Button";
import logo from '../../assets/logo2.png'
import "./Nav.css"
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Nav = () => {
  const { user, setLocalStorageChange } = useAuth();
  const navList = user
    ? ["Home", "Search House", "All Users", "Dashboard"]
    : ["Home", "Search House", "All Users"];
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("Current User");
    toast.success("Successfully Logged out in");
    setLocalStorageChange((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-[#ECF2F9] max-w-[13]: mx-auto  shadow-md px-4 md:px-8 lg:px-12 py-6 z-50">
        {/* logo  */}
        <div className=" flex-wrap items-center gap-2 hidden md:flex">
          <img className="w-[120px]" src={logo} alt="" />
        </div>
        {/* navList  */}
        <div>
          {/* toggle menu button */}
          <div className="block md:hidden z-50 relative">
            {isOpen ? (
              <button onClick={() => setIsOpen(!isOpen)} className="rounded-lg">
                <svg
                  width={45}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#8EA7E9"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            ) : (
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  width={45}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12H20M4 8H20M4 16H12"
                      stroke="#8EA7E9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            )}
          </div>
          {/* small device navItems  */}
          <div
            className={`flex flex-col justify-center items-center bg-[#dce2f3] mt-20 absolute inset-0 space-y-6  z-10 transition-all duration-500 md:hidden ${
              isOpen ? " opacity-100" : "opacity-0 scale-0"
            }`}
          >
            {navList?.map((item, idx) => (
              <NavLink
                onClick={() => setIsOpen(false)}
                key={idx}
                to={
                  item.toLowerCase() === "home"
                    ? "/"
                    : `/${encodeURIComponent(item.toLowerCase())}`
                }
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#8EA7E9] text-white px-4 py-2 shadow-md transition-all custom-border"
                    : "text-gray-500 hover:scale-105"
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
          {/* md & lg navItems  */}
          <div className="md:flex flex-row items-center md:space-y-0 z-10 transition-all duration-300 hidden">
            {navList?.map((item, idx) => (
              <div key={idx} className="hidden md:block">
                <NavLink
                  to={
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${encodeURIComponent(item.toLowerCase())}`
                  }
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-[#8EA7E9] text-white px-4 py-2 shadow-lg transition-all duration-500 custom-border font-medium"
                      : "text-[#4a64ac] font-medium px-6 py-2"
                  }
                >
                  {item}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {/* register  */}
        <div>
          {user ? (
            <div onClick={handleLogout}>
              <Button title="Logout"></Button>
            </div>
          ) : (
            <Link to="/login">
              <Button title="Login"></Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
