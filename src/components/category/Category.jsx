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
    <section className="max-sm:mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px] px-5 xl:px-[130px]">
      <p className="max-sm:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-anton text-center">
        Shop By{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C1842D] to-[#ECC974]">
          Category
        </span>
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 place-items-center">
        {uniqueCategories?.map((category, index) => (
          <div key={index} className="mb-4 relative">
            <img
              src={categoryImages[category]}
              alt={category}
              className="w-[370px] max-sm:h-[220px] md:h-[250px] lg:h-[300px] xl:h-[370px] object-cover rounded-3xl opacity-80"
              loading="lazy"
            />
            <p className="absolute left-5 top-5 max-sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[40px] capitalize bg-slate-300 bg-opacity-30">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
