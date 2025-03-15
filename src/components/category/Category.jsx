import React from "react";
import beautyBg from "../../assets/beauty.jpg";
import fragrancesBg from "../../assets/fragrances.jpg";
import furnitureBg from "../../assets/furniture.jpg";
import groceriesBg from "../../assets/groceries.jpg";

const Category = (props) => {
  const productList = props?.products?.data?.products || [];
  // Extract unique categories
  const uniqueCategories = [
    ...new Set(productList.map((product) => product.category)),
  ];

  // Category-to-Image Mapping
  const categoryImages = {
    beauty: beautyBg,
    fragrances: fragrancesBg,
    furniture: furnitureBg,
    groceries: groceriesBg,
  };

  return (
    <section className="mt-[80px] px-5 xl:px-[130px]">
      <p className="text-[48px] font-anton text-center">
        Shop By{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-800 to-yellow-200">
          Category
        </span>
      </p>
      <div className="grid grid-cols-3 gap-4 mt-12">
        {uniqueCategories?.map((category, index) => (
          <div key={index} className="mb-4 relative">
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-[370px] h-[370px] object-cover rounded-lg"
              loading="lazy"
            />
            <p className="absolute left-5 top-5 text-[40px] capitalize bg-slate-300 bg-opacity-25">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
