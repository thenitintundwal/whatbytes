import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white flex flex-col md:flex-row items-center px-4 md:px-6 py-3 justify-between gap-4">
        <div className="text-2xl font-bold md:mr-8">Logo</div>
        <input
          className="flex-1 w-full md:w-20 px-4 md:px-14 py-2 border rounded-md text-white"
          placeholder="Search for products..."
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
                <label className="block text-white">
                  <input
                    type="radio"
                    name="cat"
                    className="mr-2 accent-blue-300"
                  />
                  All
                </label>
                <label className="block text-white">
                  <input
                    type="radio"
                    name="cat"
                    className="mr-2 accent-blue-300"
                  />
                  Electronics
                </label>
                <label className="block text-white">
                  <input
                    type="radio"
                    name="cat"
                    className="mr-2 accent-blue-300"
                  />
                  Clothing
                </label>
                <label className="block text-white">
                  <input
                    type="radio"
                    name="cat"
                    className="mr-2 accent-blue-300"
                  />
                  Home
                </label>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Price</div>
              <input type="range" min="0" max="1000" className="w-full" />
            </div>
          </div>
          <div className="text-black rounded-lg p-4">
            <h2 className="font-bold mb-4">Category</h2>
            <div className="mb-4 text-black">
              <label className="block">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 accent-blue-300"
                />
                All
              </label>
              <label className="block ">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 accent-blue-300"
                />
                Electronics
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 accent-blue-300"
                />
                Clothing
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 accent-blue-300"
                />
                Home
              </label>
            </div>
            <div>
              <div className="font-semibold text-black mb-2">Price</div>
              <input
                type="number"
                placeholder="5000"
                className="w-full border rounded px-2 py-1 text-black"
              />
            </div>
          </div>
        </aside>

        {/* Product Listing */}
        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-6 text-blue-900">
            Product Listing
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card Example */}
            <ProductCard
              img="/assets/shoe.webp"
              name="Running Shoes"
              price="$99"
              className=" w-5 h-5"
            />
            <ProductCard
              img="/assets/headphone.webp"
              name="Wireless Headphones"
              price="$199"
            />
            <ProductCard
              img="/assets/bagpack.webp"
              name="Backpack"
              price="$129"
            />
            <ProductCard
              img="/assets/smartwatch.webp"
              name="Smartwatch"
              price="$249"
            />
            <ProductCard
              img="/assets/sunglasses.webp"
              name="Sunglasses"
              price="$149"
            />
            <ProductCard
              img="/assets/camera.webp"
              name="Digital Camera"
              price="$399"
            />
            <ProductCard img="/assets/tshirt.webp" name="T-shirt" price="$29" />
            {/* Featured Product */}
            <FeaturedProduct />
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
function ProductCard({ img, name, price }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={img} alt={name} className="h-20 w-20 mb-2" />
      <div className="font-semibold text-gray-800">{name}</div>
      <div className="mb-2 text-blue-900 font-bold">{price}</div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

// Featured Product Component
function FeaturedProduct() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col col-span-1 row-span-2">
      <img
        src="/assets/phone.webp"
        alt="Smartphone"
        className="h-32 w-32 mb-2 self-center"
      />
      <div className="font-bold text-lg text-blue-900">Smartphone</div>
      <div className="text-xl font-bold mb-1 text-blue-900">$699</div>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400">★★★★★</span>
      </div>
      <div className="text-sm mb-2 text-gray-600">
        Lorem ipsum dolor amet, consectetur euisagend.
      </div>
      <div className="text-xs text-gray-500 mb-4">
        Category
        <br />
        Electronics
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
