import React from "react";
import dummyImg from "/reviewBg.png";

const Category = (props) => {
  const productList = props?.products?.data?.products || [];
  // Extract unique categories
  const uniqueCategories = [
    ...new Set(productList.map((product) => product.category)),
  ];
  return (
    <section className="mt-[80px] px-5 xl:px-[130px]">
      <h1 className="text-[48px] font-bold text-center">
        Shop By{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-800 to-yellow-200">
          Category
        </span>
      </h1>
      <div className="grid grid-cols-3 py-10 md:py-20 gap-4">
        {uniqueCategories?.map((category, index) => (
          <div key={index} className="mb-4 break-inside-avoid relative">
            <img
              src={dummyImg}
              alt={category}
              className="w-full object-cover rounded-lg"
            />
            <p className="absolute left-5 bottom-5">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
