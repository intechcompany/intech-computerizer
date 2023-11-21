import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();

  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fine-teal-sea-urchin-cuff.cyclic.app/api/products"
      );
      // console.log(response.data.data);
      setProducts(response.data.data);
    };
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://fine-teal-sea-urchin-cuff.cyclic.app/api/categories"
      );
      setCategories(response.data.data);
    };
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    // Perform filtering based on keyword and selectedCategory
    const filtered = products.filter(
      (product) =>
        (product.name.toLowerCase().includes(keyword.toLowerCase()) ||
          product.description.toLowerCase().includes(keyword.toLowerCase())) &&
        (selectedCategory === "" || product.category._id === selectedCategory)
    );
    // console.log("filtered >> ", filtered);
    setFilteredProducts(filtered);
  }, [keyword, products, selectedCategory]);

  return (
    <>
      <Navbar />
      <main className="section my-14">
        <section className="section px-5 font-semibold flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
          <h2 className="text-black-2 text-3xl">All Product</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-5 items-center">
            <div className="flex  items-center gap-2">
              <p className="text-sm">Sort By:</p>
              <select
                className="border w-48 border-black rounded-3xl px-3 py-2 capitalize"
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All</option>
                {categories &&
                  categories.map((item) => {
                    return (
                      <option value={item._id}>{item.category_name}</option>
                    );
                  })}
              </select>
            </div>
            <div className="w-64 flex rounded-3xl border gap-3 border-black px-3 py-2">
              <img
                className="w-4 h-4 object-cover"
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt=""
              />
              <input
                placeholder="Search"
                value={keyword}
                onChange={handleChange}
                className="outline-none text-sm font-light"
                type="text"
              />
            </div>
          </div>
        </section>
        <section className="h-[50rem] py-10 md:py-0 hide-scroll overflow-y-auto md:h-full section px-5 mt-10 w-full flex flex-wrap gap-10 justify-center">
          {!filteredProducts && <p className="py-5">Loading...</p>}
          {filteredProducts &&
            filteredProducts.map((item, i) => (
              <ProductCard
                key={i}
                title={item.name}
                price={item.sell_price}
                thumbnail={item.thumbnailUrl}
                id={item._id}
              />
            ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
