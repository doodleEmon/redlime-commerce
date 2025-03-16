import React from "react";
import search from "../../assets/search.png";

const SearchBar = () => {
  return (
    <section className="flex justify-center">
      <div className="relative max-sm:mt-[50px] md:mt-[80px] lg:mt-[120px] xl:mt-[147px] mx-auto">
        <input
          className="max-sm:w-full sm:w-full md:w-[300px] lg:w-[400px] xl:w-[612px] bg-transparent outline-none border mt-6 pr-8 pl-[72px] max-sm:py-3 md:py-4 lg:py-5 xl:py-6 rounded-full placeholder-white max-sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wider"
          type="text"
          name="message"
          id="message"
          placeholder="Search by product/treatment"
        />
        <img
          // onClick={""}
          src={search}
          alt="Sent"
          className="absolute left-[10%] md:left-[5%] top-[50%]"
        />
      </div>
    </section>
  );
};

export default SearchBar;
