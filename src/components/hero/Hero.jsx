import React from "react";

const Hero = () => {
  return (
    <section className="px-[130px] mt-16">
      <div>
        <h1 className="text-6xl font-bold">Prescription</h1>
        <h1 className="text-6xl font-bold">Treatments For</h1>
        <h1 className="text-6xl font-bold">Your</h1>
        <h1 className="text-6xl font-bold">Health Goals</h1>
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
