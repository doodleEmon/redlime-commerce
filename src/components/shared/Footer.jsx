import React from "react";
import branding from "../../assets/branding.png";
import hippa from "../../assets/hippa.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#3D55CC] to-[#1F1F1F] pt-16">
      <div className="px-[137px] flex gap-36">
        <div className="border border-red-500">
          <div className="border border-slate-400 rounded-2xl p-10">
            <div>
              <h3 className="text-[43px] text-center">Let's Stay In</h3>
              <h3 className="text-[43px] text-center">Touch</h3>
            </div>
            <div className="text-center mt-4 px-8">
              <p>Keep up to date with our latest news &</p>
              <p>special offers.</p>
            </div>
            <div className="relative">
              <input
                className="w-full bg-transparent outline-none border mt-6 pl-6 pr-12 py-4 rounded-lg placeholder-white"
                type="text"
                name="message"
                id="message"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <img className="mx-auto pt-[74px]" src={hippa} alt="Hippa" />
        </div>
        <div className="border border-yellow-500">
          <div className="flex justify-end">
            <div>
              <div>
                <small>Quick links</small>
                <div className="flex flex-col gap-4 mt-6">
                  <a href="#">Erectile Dysfunction</a>
                  <a href="#">Weight Loss</a>
                  <a href="#">Men's Hair Loss</a>
                </div>
              </div>
            </div>
            <div>right</div>
          </div>
          <div>bottom</div>
        </div>
      </div>
      <div>
        <img src={branding} alt="Brand" className="px-[60px]" />
      </div>
    </div>
  );
};

export default Footer;
