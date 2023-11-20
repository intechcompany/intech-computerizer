import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Gallery />
    </>
  );
};

export default HomePage;
