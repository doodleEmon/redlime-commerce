import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import rizzLogo from "../../assets/rizzLogo.png";
import downArrow from "../../assets/downArrow.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import cart from "../../assets/cartIcon.png";
import cartBlack from "../../assets/cartBlack.png";
import { navItems } from "../../utils/navItem";
import Menu from "../../assets/svg/Menu";
import Close from "../../assets/svg/Close";
import ThreeDot from "../../assets/svg/ThreeDot";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close three-dot dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setMoreMenuOpen(false);
      }
    };

    if (moreMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-blue-950 shadow-md" : "bg-transparent"
      } mb-24`}
    >
      <div
        className={`flex justify-between items-center px-6 lg:px-[130px] ${
          scrolled ? "py-1" : "py-4"
        }`}
      >
        {/* Logo */}
        <div>
          {scrolled ? (
            <img src={rizzLogo} alt="Logo" className="w-32" />
          ) : (
            <img src={logo} alt="Logo" className="w-32" />
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col justify-evenly">
          <ul className="flex gap-6 lg:gap-9 items-center justify-center">
            {navItems.map((item) =>
              item.subItem ? (
                <li key={item.id} className="group relative inline-block">
                  <a
                    href={item.url}
                    className="text-[16px] flex items-center py-2"
                  >
                    <span>{item.title}</span>
                    <img
                      src={downArrow}
                      alt="Down arrow"
                      className="ml-2 transition-transform group-hover:rotate-180"
                    />
                  </a>
                  <ul className="hidden group-hover:block absolute min-w-[140px] shadow-lg z-10 bg-[#E1C06E] rounded-md">
                    {item.subItem.map((subItem, index) => (
                      <li
                        key={subItem.id}
                        className={`hover:bg-slate-200 pl-4 pr-2 py-3 
                        ${index === 0 ? "rounded-t-md" : ""} 
                        ${
                          index === item.subItem.length - 1
                            ? "rounded-b-md"
                            : ""
                        }`}
                      >
                        <a
                          href={subItem.url}
                          className="text-black capitalize"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.url} className="text-[16px]">
                    {item.title}
                  </a>
                </li>
              )
            )}
            {/* Social Icons */}
            <div className="flex gap-4 ml-2">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </div>
            {scrolled && (
              <div className="relative" ref={moreMenuRef}>
                <button
                  className="h-5 w-5 flex justify-center items-center"
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                >
                  <ThreeDot className="h-5 w-5" />
                </button>
                {moreMenuOpen && (
                  <ul className="absolute right-0 bg-[#E1C06E] text-black shadow-md rounded-md mt-4 w-24">
                    <li className="hover:bg-slate-200 rounded-t-md">
                      <button className="block w-full text-left py-2 px-4">
                        Sign Up
                      </button>
                    </li>
                    <li className="hover:bg-slate-200">
                      <button className="block w-full text-left py-2 px-4">
                        Log In
                      </button>
                    </li>
                    <li className="hover:bg-slate-200 rounded-b-md">
                      <button className="w-full text-left py-2 px-4">
                        <img
                          src={cartBlack}
                          alt="Cart"
                          className="w-6 h-6 inline-block"
                        />
                        <span className="pl-1">Cart</span>
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </ul>

          {/* Buttons & Cart - Show Normally or in More Menu */}
          {!scrolled && (
            <div className="flex gap-6 lg:gap-8 justify-end mt-4">
              <button className="border py-1 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">
                Sign Up
              </button>
              <button className="border py-1 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">
                Log In
              </button>
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Close className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-[60px] left-0 w-full shadow-md p-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.subItem ? (
                <li key={item.id} className="group relative">
                  <a href={item.url} className="text-[16px] flex items-center">
                    <span>{item.title}</span>
                  </a>
                  <ul className="mt-2 bg-gray-100 p-2 rounded-md">
                    {item.subItem.map((subItem) => (
                      <li key={subItem.id}>
                        <a href={subItem.url} className="text-[14px]">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.url} className="text-[16px] block">
                    {item.title}
                  </a>
                </li>
              )
            )}
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </div>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button className="border py-2 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">
              Sign Up
            </button>
            <button className="border py-2 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;