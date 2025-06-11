"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-blue-900 mb-8 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Continue Shopping
          </Link>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-900 mb-8 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-6 flex flex-col sm:flex-row items-center gap-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-blue-900 font-bold mt-1">${item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>

                <div className="text-right font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">
                Total Items:
              </span>
              <span className="text-lg font-semibold text-gray-800">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-800">
                Total Amount:
              </span>
              <span className="text-2xl font-bold text-blue-900">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <button
              className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition-colors"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
