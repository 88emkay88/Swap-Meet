import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";
import AuctionCard from "../components/AuctionCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PopularCategories />
      <AuctionCard />
      <Footer />
    </>
  );
};

export default Home;
