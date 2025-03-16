import React from "react";

const Hero = () => {
  return (
    <section className="max-sm:px-5 sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[130px] max-sm:mt-28 sm:mt-32 md:mt-48 xl:mt-56">
      <div className="flex flex-col max-sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        <p className="max-sm:text-[26px] md:text-4xl lg:text-5xl xl:text-7xl font-anton font-semibold tracking-wider leading-relaxed">
          Prescription
        </p>
        <p className="max-sm:text-[26px] md:text-4xl lg:text-5xl xl:text-7xl font-anton font-semibold tracking-wider leading-snug">
          Treatments For
        </p>
        <p className="max-sm:text-[26px] md:text-4xl lg:text-5xl xl:text-7xl font-anton font-semibold tracking-wider leading-snug">
          Your
        </p>
        <p className="max-sm:text-[26px] md:text-4xl lg:text-5xl xl:text-7xl font-anton font-semibold tracking-wider leading-snug text-[#E1C06E]">
          Health Goals
        </p>
      </div>
      <div className="flex items-center mt-[34px]">
        <div className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gray-800 rounded-full px-6 py-3">
            <h1 className="max-sm:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold text-white">
              Find My Treatment
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
