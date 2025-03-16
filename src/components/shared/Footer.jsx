import React from "react";
import branding from "../../assets/branding.png";
import hippa from "../../assets/hippa.png";
import sent from "../../assets/sent.png";
import mail from "../../assets/mail.png";
import socialFb from "../../assets/socialFb.png";
import socialIn from "../../assets/socialIn.png";
import legitScript from "../../assets/legitScript.png";

const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#33428d] to-[#1b1b1b] pt-16 mt-[160px]">
      <div className="max-sm:px-2 sm:px-5 md:px-8 lg:px-[100px] xl:px-[130px] md:flex justify-between lg:gap-10 xl:gap-44">
        <div className="w-full px-4">
          <div className="border border-slate-400 rounded-2xl p-6">
            <div>
              <h3 className="max-sm:text-[35px] xl:text-[43px] text-center">Let's Stay In</h3>
              <h3 className="max-sm:text-[35px] xl:text-[43px] text-center">Touch</h3>
            </div>
            <div className="text-center mt-4">
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
              <img
                src={sent}
                alt="Sent"
                className="absolute right-4 bottom-4"
              />
            </div>
          </div>
          <img
            // onClick={""}
            className="mx-auto pt-[74px]"
            src={hippa}
            alt="Hippa"
          />
        </div>
        <div className="w-full">
          <div className="max-sm:px-2 sm:px-5 md:flex justify-between gap-5 mt-10">
            <div>
              <div>
                <small>Quick links</small>
                <div className="flex flex-col gap-4 mt-6">
                  <a href="#">Erectile Dysfunction</a>
                  <a href="#">Weight Loss</a>
                  <a href="#">Men's Hair Loss</a>
                </div>
              </div>
              <div className="mt-14">
                <small>Contact Info</small>
                <span className="flex gap-2 items-center mt-5 flex-wrap">
                  <img src={mail} alt="Mail" />
                  <p>hello@rizzpharma.com</p>
                </span>
              </div>
            </div>
            <div>
              <small>Our Company</small>
              <div className="mt-6 flex flex-col gap-4">
                <p>HIPPA Notice</p>
                <p>Privacy Policy</p>
                <p>Return & Refund Policy</p>
                <p>Terms Of Use</p>
                <p>CCPA Opt-Out</p>
                <p>Opt-Out Preferences</p>
              </div>
            </div>
          </div>
          <div className="mt-[60px] max-sm:px-3 sm:px-5">
            <div className="flex gap-4">
              <div className="w-9 h-9 bg-[#434B76] flex justify-center items-center rounded-full">
                <img src={socialFb} alt="Facebook" />
              </div>
              <div className="w-9 h-9 bg-[#434B76] flex justify-center items-center rounded-full">
                <img src={socialIn} alt="Instagram" />
              </div>
            </div>
            <div className="mt-[26px] flex gap-4 items-center">
              <img src={legitScript} alt="Legit Script" />
              <p className="max-sm:text-sm md:text-base">Copyright &copy; 2024 Rizz Pharma All Right Reserved - Built by Business Web Social.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center">
        <img src={branding} alt="Brand" className="max-sm:px-[20] sm:px-[30px] md:px-[40px] lg:px-[60px] md:h-[200px] lg:h-[400px] xl:h-[581px]" />
      </div>
    </section>
  );
};

export default Footer;
