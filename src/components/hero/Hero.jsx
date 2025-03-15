import React from "react";

const Hero = () => {
  return (
    <section className="px-[130px] mt-16">
      <div>
        <p className="text-7xl font-anton font-bold tracking-wider leading-snug">Prescription</p>
        <p className="text-7xl font-anton font-bold tracking-wider leading-snug">Treatments For</p>
        <p className="text-7xl font-anton font-bold tracking-wider leading-snug">Your</p>
        <p className="text-7xl font-anton font-bold tracking-wider leading-snug text-[#E1C06E]">Health Goals</p>
      </div>
      <div className="flex items-center mt-[34px]">
        <div className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gray-800 rounded-full px-6 py-3">
            <h1 className="text-[22px] font-bold text-white">
              Find My Treatment
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
