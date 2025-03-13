import React from "react";
import Hero from "../../../components/hero/Hero";
import SearchBar from "../../../components/searchbar/SearchBar";
import Category from "../../../components/category/Category";
import Services from "../../../components/services/Services";
import Products from "../../../components/products/Products";
import OnlineConvenient from "../../../components/onlineConvenient/OnlineConvenient";
import Reviews from "../../../components/reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Category />
      <Services />
      <Products />
      <OnlineConvenient />
      <Reviews />
    </div>
  );
};

export default Home;
