import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
