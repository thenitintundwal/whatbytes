"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useCart } from "./context/CartContext";
import Link from "next/link";

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

// Cart Button Component
const CartButton = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <Link
      href="/cart"
      className="flex items-center bg-blue-950 px-4 py-2 rounded-md mt-2 md:mt-0 relative hover:bg-blue-900 transition-colors"
    >
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      Cart
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

// Product Card Component
const ProductCard = ({ id, img, name, price, category }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <Link href={`/product/${id}`} className="w-full text-center">
        <img
          src={img}
          alt={name}
          className="h-20 w-20 mb-2 mx-auto hover:scale-110 transition-transform"
        />
        <div className="font-semibold text-gray-800 hover:text-blue-900">
          {name}
        </div>
        <div className="text-sm text-gray-600 mb-1">{category}</div>
        <div className="mb-2 text-blue-900 font-bold">${price}</div>
      </Link>
      {quantity > 0 ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="bg-blue-700 text-white px-2 py-1 rounded"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="bg-blue-700 text-white px-2 py-1 rounded"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart({ id, name, price, category, img })}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

// Featured Product Component
const FeaturedProduct = ({ id, img, name, price, category }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 row-span-2">
      <Link href={`/product/${id}`} className="text-center">
        <img
          src={img}
          alt={name}
          className="h-32 w-32 mb-2 self-center hover:scale-110 transition-transform"
        />
        <div className="font-bold text-lg text-blue-900 hover:text-blue-700">
          {name}
        </div>
        <div className="text-xl font-bold mb-1 text-blue-900">${price}</div>
        <div className="flex items-center mb-2 justify-center">
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
      </Link>
      {quantity > 0 ? (
        <div className="flex items-center gap-2 justify-center">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="bg-blue-700 text-white px-2 py-1 rounded"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="bg-blue-700 text-white px-2 py-1 rounded"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart({ id, name, price, category, img })}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

// Main Content Component
const MainContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL parameters with proper type conversion
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const category = searchParams.get("category");
    return category || "All";
  });

  const [maxPrice, setMaxPrice] = useState(() => {
    const price = searchParams.get("price");
    return price ? Math.min(Math.max(Number(price), 0), 1000) : 1000;
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    return searchParams.get("search") || "";
  });

  // Memoize the URL update function to prevent unnecessary re-renders
  const updateURL = useCallback(
    (newParams) => {
      const params = new URLSearchParams();

      if (newParams.category !== "All") {
        params.set("category", newParams.category);
      }

      if (newParams.price !== 1000) {
        params.set("price", newParams.price.toString());
      }

      if (newParams.search) {
        params.set("search", newParams.search);
      }

      const newUrl = params.toString()
        ? `?${params.toString()}`
        : window.location.pathname;
      router.push(newUrl, { scroll: false });
    },
    [router]
  );

  // Update URL when filters change
  useEffect(() => {
    updateURL({
      category: selectedCategory,
      price: maxPrice,
      search: searchQuery,
    });
  }, [selectedCategory, maxPrice, searchQuery, updateURL]);

  // Filter products based on category, price, and search query
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && searchMatch;
  });

  // Get unique categories for the filter
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Handle filter changes with validation
  const handleCategoryChange = useCallback(
    (category) => {
      if (categories.includes(category)) {
        setSelectedCategory(category);
      }
    },
    [categories]
  );

  const handlePriceChange = useCallback((price) => {
    const newPrice = Number(price);
    if (!isNaN(newPrice) && newPrice >= 0 && newPrice <= 1000) {
      setMaxPrice(newPrice);
    }
  }, []);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query.trim());
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSelectedCategory("All");
    setMaxPrice(1000);
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white flex flex-col md:flex-row items-center px-4 md:px-6 py-3 justify-between gap-4">
        <div className="text-2xl font-bold md:mr-8">Logo</div>
        <input
          className="flex-1 w-full md:w-20 px-4 md:px-14 py-2 border rounded-md text-white"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <CartButton />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row px-2 md:px-6 py-4 md:py-8 gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 md:mr-8 mb-6 md:mb-0">
          <div className="rounded-lg shadow p-5 mb-6 bg-blue-900">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-white">Filters</h2>
              {(selectedCategory !== "All" ||
                maxPrice !== 1000 ||
                searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-white hover:text-gray-200 underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
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
                      onChange={(e) => handleCategoryChange(e.target.value)}
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
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </aside>

        {/* Product Listing */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-900">
              Product Listing ({filteredProducts.length} products)
            </h1>
            {(selectedCategory !== "All" ||
              maxPrice !== 1000 ||
              searchQuery) && (
              <div className="text-sm text-gray-600">
                Active Filters:{" "}
                {selectedCategory !== "All" && (
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                    Category: {selectedCategory}
                  </span>
                )}
                {maxPrice !== 1000 && (
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                    Max Price: ${maxPrice}
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Search: {searchQuery}
                  </span>
                )}
              </div>
            )}
          </div>
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-600 py-8 bg-white rounded-lg shadow">
              <p className="text-lg mb-2">
                No products found matching your filters
              </p>
              <button
                onClick={clearFilters}
                className="text-blue-900 hover:text-blue-700 underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
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
          )}
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
};

// Root Component
export default function Home() {
  return <MainContent />;
}
