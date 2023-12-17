import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../PageContextLogic";
import axios from "axios";

const Home = () => {
  const { setPage } = useContext(PageContext);
  const [displayCatalog, setDisplayCatalog] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setPage("home");
    fetchProducts();
  }, [setPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCatalogDisplay = (category = "") => {
    // If the same category is selected or if trying to display all products, toggle display.
    if (selectedCategory === category || category === "") {
      setDisplayCatalog(!displayCatalog);
      setSelectedCategory(category);
    } else {
      // If a different category is selected, show the catalog and set the new category.
      setSelectedCategory(category);
      setDisplayCatalog(true);
    }
  };
  

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex pt-20 flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Welcome to the Fakestore Catalog
      </h1>
      <p className="text-center text-gray-600 mb-8">
        This page is where you can view and filter current products in the catalog.
      </p>
      <p className="text-center text-gray-600 mb-8">
        Practice visual CRUD operations with this interactive website!
      </p>

      <div className="mb-4">
  <button
    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2"
    onClick={() => handleCatalogDisplay()}>
    {displayCatalog && !selectedCategory ? "Hide Catalog" : "Display All Products"}
  </button>
  <button
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
    onClick={() => handleCatalogDisplay("electronics")}>
    {displayCatalog && selectedCategory === "electronics" ? "Hide Electronics" : "Electronics"}
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
    onClick={() => handleCatalogDisplay("men's clothing")}>
    {displayCatalog && selectedCategory === "men's clothing" ? "Hide Men's Clothing" : "Men's Clothing"}
  </button>
  <button
    className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded mr-2"
    onClick={() => handleCatalogDisplay("women's clothing")}>
    {displayCatalog && selectedCategory === "women's clothing" ? "Hide Women's Clothing" : "Women's Clothing"}
  </button>
  <button
    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
    onClick={() => handleCatalogDisplay("jewelery")}>
    {displayCatalog && selectedCategory === "jewelry" ? "Hide Jewelry" : "Jewelry"}
  </button>
</div>

      {displayCatalog && (
        <div className="mt-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded p-4 mb-4 flex">
              <div className="w-1/4 max-w-xs">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-grow pl-4">
                <h3 className="text-xl font-semibold">
                  ID: {product.id} - {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-semibold">
                  Price: ${product.price}
                </p>
                <p className="text-gray-600">Category: {product.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
