import React from "react";

const Hero = () => {
  return (
    <section className="px-[137px]">
      <div>
        <h1 className="text-6xl font-bold">Prescription</h1>
        <h1 className="text-6xl font-bold">Treatments For</h1>
        <h1 className="text-6xl font-bold">Your</h1>
        <h1 className="text-6xl font-bold">Health Goals</h1>
      </div>
      <div class="flex items-center mt-[34px]">
        <div class="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[2px]">
          <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full px-6 py-3">
            <h1 class="text-[22px] font-bold text-white">
              Find My Treatment
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
