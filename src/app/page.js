"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Move products data outside of component to prevent recreation on each render
const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    img: "/assets/shoe.webp",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    img: "/assets/headphone.webp",
  },
  {
    id: 3,
    name: "Backpack",
    price: 129,
    category: "Home",
    img: "/assets/bagpack.webp",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    img: "/assets/smartwatch.webp",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    img: "/assets/sunglasses.webp",
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 399,
    category: "Electronics",
    img: "/assets/camera.webp",
  },
  {
    id: 7,
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    img: "/assets/tshirt.webp",
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    img: "/assets/phone.webp",
    featured: true,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on category, price, and search query
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    const searchMatch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && searchMatch;
  });

  // Get unique categories for the filter
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white flex flex-col md:flex-row items-center px-4 md:px-6 py-3 justify-between gap-4">
        <div className="text-2xl font-bold md:mr-8">Logo</div>
        <input
          className="flex-1 w-full md:w-20 px-4 md:px-14 py-2 border rounded-md text-white"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="flex items-center bg-blue-950 px-4 py-2 rounded-md mt-2 md:mt-0">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          {/* <FontAwesomeIcon icon="fa-regular fa-cart-shopping" /> */}
          Cart
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row px-2 md:px-6 py-4 md:py-8 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 md:mr-8 mb-6 md:mb-0">
          <div className="rounded-lg shadow p-5 mb-6 bg-blue-900">
            <h2 className="font-bold mb-4 text-white">Filters</h2>
            <div className="mb-4 text-white rounded-lg p-4">
              <div className="font-semibold mb-2">Category</div>
              <div className="space-y-1">
                {categories.map((category) => (
                  <label key={category} className="block text-white">
                    <input
                      type="radio"
                      name="cat"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2 accent-blue-300"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">
                Price (Max: ${maxPrice})
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </aside>

        {/* Product Listing */}
        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-6 text-blue-900">
            Product Listing ({filteredProducts.length} products)
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) =>
              product.featured ? (
                <FeaturedProduct key={product.id} {...product} />
              ) : (
                <ProductCard
                  key={product.id}
                  {...product}
                  price={`$${product.price}`}
                />
              )
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-4 md:px-6 py-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-bold mb-2">Filters</div>
            <div>All</div>
            <div>© 2024 American</div>
          </div>
          <div>
            <div className="font-bold mb-2">About Us</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
          <div>
            <div className="font-bold mb-2">Follow Us</div>
            <div className="flex space-x-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-0">
              <FontAwesomeIcon icon={faFacebook} className="md:text-xl" />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Product Card Component
function ProductCard({ img, name, price, category }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={img} alt={name} className="h-20 w-20 mb-2" />
      <div className="font-semibold text-gray-800">{name}</div>
      <div className="text-sm text-gray-600 mb-1">{category}</div>
      <div className="mb-2 text-blue-900 font-bold">{price}</div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

// Featured Product Component
function FeaturedProduct({ img, name, price, category }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 row-span-2">
      <img src={img} alt={name} className="h-32 w-32 mb-2 self-center" />
      <div className="font-bold text-lg text-blue-900">{name}</div>
      <div className="text-xl font-bold mb-1 text-blue-900">${price}</div>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400">★★★★★</span>
      </div>
      <div className="text-sm mb-2 text-gray-600">
        Lorem ipsum dolor amet, consectetur euisagend.
      </div>
      <div className="text-xs text-gray-500 mb-4">
        Category
        <br />
        {category}
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
