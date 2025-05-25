import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";
import AuctionCard from "../components/AuctionCard";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PopularCategories />
      <AuctionCard />
    </>
  );
};

export default Home;
