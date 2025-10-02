import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import LinkedInLogo from "../assets/linkedin.png";
import { NavLink } from "react-router-dom";
import logo from "../assets/univmaalogo.png";
import "../App.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const checkScrollY = () => {
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleSidebar = (e) => {
    e.stopPropagation();
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY);
    return () => {
      window.removeEventListener("scroll", checkScrollY);
    };
  }, []);

  return (
    <>
      {/* ======= Navbar ======= */}
      <nav
        className={`${
          nav
            ? "bg-blue-950 transition-all duration-500 fixed w-full flex justify-between items-center text-white md:px-16 sm:px-10 px-6 py-2 shadow-lg"
            : "fixed w-full flex justify-between items-center text-white md:px-16 sm:px-10 px-6 py-4"
        } z-[999999] h-20`} // 🔹 fixed navbar height
      >
        {/* Logo on Left */}
        <div className="flex items-center h-full px-4">
          <Link spy={true} smooth={true} offset={0} duration={500} to={"home"}>
            <img
              src={logo}
              alt="logo"
              className="w-28 h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden items-center gap-10 text-lg mx-auto">
          <li className="relative group">
            <NavLink
              to={"/"}
              className="cursor-pointer flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Home
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink
              to={"/aboutus"}
              className="cursor-pointer flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              About Us
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink
              to={"/career"}
              className="cursor-pointer flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Career
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
              Services ▾
            </span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-lg w-64 z-50">
              <li className="relative group/sub border-b border-gray-200">
                <NavLink
                  to="/salesforceimplementation"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Implementation
                </NavLink>
                {/* Submenu */}
                <ul className="absolute left-full top-0 bg-white text-black shadow-lg w-64 z-50 opacity-0 translate-x-2 invisible group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300 ease-in-out">
                  <li>
                    <NavLink
                      to="/salescloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce Sales Cloud
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/servicecloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce Service Cloud
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/marketingcloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce Marketing Cloud
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/exprencecloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce Experience Cloud
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/healthcloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce Health Cloud
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/revenuecloud"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Revenue Cloud Advanced
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cpq"
                      className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                    >
                      Salesforce CPQ
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/datacloud"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Data Cloud
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agentforce"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Agentforce
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tableau"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Tableau
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mulesoft"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Mulesoft Integration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/salesforceadvisory"
                  className="block px-4 py-2 text-sm font-thin hover:bg-gray-100"
                >
                  Salesforce Advisory
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <NavLink
              to={"/contactus"}
              className="cursor-pointer flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon Mobile */}
        <button
          className={`hamburger ${mobileNav ? "is-active" : ""} md:hidden`}
          onClick={handleSidebar}
        >
          {mobileNav ? (
            <AiOutlineClose className="text-3xl duration-300" />
          ) : (
            <FiMenu className="text-3xl duration-300" />
          )}
        </button>
      </nav>

      {/* ======== Mobile Nav ======== */}
      <div
        className={`w-full h-screen bg-[#000000bb] fixed md:hidden ${
          mobileNav ? "left-0" : "-left-full"
        } duration-300 transition-all z-[99]`}
      >
        <div className="bg-blue-950 text-white h-screen relative flex flex-col w-72 px-6 text-lg">
          {/* Logo inside mobile sidebar */}
          <div className="h-20 flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 py-6 border-t border-b border-slate-500">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutus"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/career"}>Career</NavLink>
            </li>
            <li>
              <NavLink to={"/salesforceimplementation"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contactus"}>Contact us</NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="mb-2">Follow us:</p>
            <div className="icons flex gap-3">
              <Link className="hover:-translate-y-2 duration-300" to="">
                <img src={fbLogo} alt="facebook icon" className="w-6" />
              </Link>
              <Link className="hover:-translate-y-2 duration-300" to="">
                <img src={instaLogo} alt="instagram icon" className="w-6" />
              </Link>
              <Link className="hover:-translate-y-2 duration-300" to="">
                <img src={twitterLogo} alt="twitter icon" className="w-6" />
              </Link>
              <Link className="hover:-translate-y-2 duration-300" to="">
                <img src={LinkedInLogo} alt="linkedin icon" className="w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
