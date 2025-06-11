"use client";

import React from "react";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Move products data to a separate file in a real application
const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    img: "/assets/shoe.webp",
    description:
      "Lightweight and comfortable running shoes perfect for your daily jog or workout session. Features advanced cushioning technology and breathable mesh upper.",
    features: [
      "Breathable mesh upper",
      "Advanced cushioning",
      "Durable rubber outsole",
      "Available in multiple colors",
    ],
    rating: 4.5,
    reviews: 128,
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    img: "/assets/headphone.webp",
    description:
      "Premium wireless headphones with noise cancellation technology. Experience crystal clear sound and all-day comfort.",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
    ],
    rating: 4.8,
    reviews: 256,
    stock: 20,
  },
  {
    id: 3,
    name: "Backpack",
    price: 129,
    category: "Home",
    img: "/assets/bagpack.webp",
    description:
      "Spacious and durable backpack with multiple compartments. Perfect for work, travel, or everyday use.",
    features: [
      "Water-resistant material",
      "Laptop compartment",
      "Multiple pockets",
      "Adjustable straps",
    ],
    rating: 4.3,
    reviews: 89,
    stock: 25,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    img: "/assets/smartwatch.webp",
    description:
      "Feature-packed smartwatch with health monitoring and fitness tracking capabilities. Stay connected and track your fitness goals.",
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
    ],
    rating: 4.6,
    reviews: 167,
    stock: 12,
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    img: "/assets/sunglasses.webp",
    description:
      "Stylish sunglasses with UV protection and polarized lenses. Perfect for outdoor activities and everyday wear.",
    features: [
      "UV protection",
      "Polarized lenses",
      "Lightweight frame",
      "Includes protective case",
    ],
    rating: 4.4,
    reviews: 92,
    stock: 30,
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 399,
    category: "Electronics",
    img: "/assets/camera.webp",
    description:
      "High-resolution digital camera with advanced features for both beginners and professionals. Capture stunning photos and videos.",
    features: [
      "24MP sensor",
      "4K video recording",
      "Wi-Fi connectivity",
      "3-inch touchscreen",
    ],
    rating: 4.7,
    reviews: 203,
    stock: 8,
  },
  {
    id: 7,
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    img: "/assets/tshirt.webp",
    description:
      "Comfortable cotton t-shirt with a modern fit. Perfect for casual wear and everyday comfort.",
    features: [
      "100% cotton",
      "Machine washable",
      "Available in multiple sizes",
      "Multiple color options",
    ],
    rating: 4.2,
    reviews: 156,
    stock: 50,
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    img: "/assets/phone.webp",
    description:
      "Latest smartphone with advanced features, high-performance camera, and long-lasting battery life.",
    features: [
      "6.5-inch display",
      "Triple camera system",
      "5G connectivity",
      "All-day battery life",
    ],
    rating: 4.9,
    reviews: 342,
    stock: 10,
  },
];

export default function ProductPage({ params }) {
  const { id } = params;
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-900 mb-8 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Products
          </Link>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              Sorry, the product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-900 mb-8 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-96 w-auto object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="text-2xl font-bold text-blue-900 mb-4">
                ${product.price}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h2 className="font-semibold text-gray-800 mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
                <br />
                <span className="font-semibold">Stock:</span> {product.stock}{" "}
                units available
              </div>

              {quantity > 0 ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="bg-gray-100 text-gray-600 px-3 py-2 rounded hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="bg-gray-100 text-gray-600 px-3 py-2 rounded hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700 px-4 py-2"
                  >
                    Remove from Cart
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors w-full md:w-auto"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
