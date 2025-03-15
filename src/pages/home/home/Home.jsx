import React, { useEffect } from "react";
import Hero from "../../../components/hero/Hero";
import SearchBar from "../../../components/searchbar/SearchBar";
import Category from "../../../components/category/Category";
import Services from "../../../components/services/Services";
import Products from "../../../components/products/Products";
import OnlineConvenient from "../../../components/onlineConvenient/OnlineConvenient";
import Reviews from "../../../components/reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.product   // product = name of where reducer stored in the store.js
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("🚀 ~ Home ~ products:", products);

  return (
    <div>
      <Hero />
      <SearchBar />
      <Category products={products}/>
      <Services />
      <Products products={products} />
      <OnlineConvenient />
      <Reviews products={products} />
    </div>
  );
};

export default Home;
