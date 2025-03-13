import React from "react";
import Hero from "../../../components/hero/Hero";
import SearchBar from "../../../components/searchbar/SearchBar";
import Category from "../../../components/category/Category";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Category/>
    </div>
  );
};

export default Home;
