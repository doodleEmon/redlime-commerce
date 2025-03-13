import React from "react";
import logo from "../../assets/logo.png";
import downArrow from "../../assets/downArrow.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import cart from "../../assets/cartIcon.png";
import { navItems } from "../../utils/navItem";

const Header = () => {
  return (
    <nav className="mt-[30px] px-[137px]">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col justify-evenly">
          <ul className="flex gap-9">
            {navItems.map((item) =>
              item.subItem ? (
                <li key={item.id} className="group relative inline-block">
                  <a
                    href={item.url}
                    className="text-[16px] flex items-center pb-2"
                  >
                    <span>{item.title}</span>
                    <img
                      src={downArrow}
                      alt="Down arrow"
                      className="ml-2 transition-transform group-hover:rotate-180"
                    />
                  </a>
                  <ul className="space-y-2 hidden group-hover:block absolute min-w-[140px] shadow-lg z-10 bg-red-500 p-2">
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
                  <a href={item.url} className="text-[16px]">
                    {item.title}
                  </a>
                </li>
              )
            )}
            <div className="flex gap-4 ml-2">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </div>
          </ul>
          <div className="flex gap-8 justify-end">
            <button className="border py-1 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">Sign Up</button>
            <button className="border py-1 px-4 rounded-full hover:bg-[#E1C06E] hover:text-black hover:border-[#E1C06E]">Log In</button>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
