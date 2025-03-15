import React from "react";
import dummyImg from "/reviewBg.png";

const Category = () => {
  return (
    <section className="mt-[80px] px-5 xl:px-[130px]">
      <h1 className="text-[48px] font-bold text-center">
        Shop By{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-800 to-yellow-200">
          Category
        </span>
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img src={dummyImg} alt="" className="w-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Category;
