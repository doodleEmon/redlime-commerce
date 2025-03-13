import React from "react";
import Hero from "../../../components/hero/Hero";
import SearchBar from "../../../components/searchbar/SearchBar";
import Category from "../../../components/category/Category";
import Services from "../../../components/services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Category/>
      <Services/>
    </div>
  );
};

export default Home;
