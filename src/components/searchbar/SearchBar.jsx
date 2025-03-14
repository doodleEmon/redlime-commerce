import React from "react";
import search from "../../assets/search.png";

const SearchBar = () => {
  return (
    <section className="flex justify-center">
      <div className="relative mt-[147px] mx-auto">
        <input
          className="w-[612px] bg-transparent outline-none border mt-6 pr-8 pl-[72px] py-6 rounded-full placeholder-white text-xl tracking-wider"
          type="text"
          name="message"
          id="message"
          placeholder="Search by product/treatment"
        />
        <img
          // onClick={""}
          src={search}
          alt="Sent"
          className="absolute left-8 bottom-7"
        />
      </div>
    </section>
  );
};

export default SearchBar;
