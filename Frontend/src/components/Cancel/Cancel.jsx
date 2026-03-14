
import React from "react";

const Cancel=()=>{

    return (
      <>
        <div class="bg-purple-50 flex items-center justify-center min-h-screen">
          <div class="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md border border-purple-100">
            {/* Cancel Icon */}
            <div class="flex justify-center mb-6">
              <div class="bg-purple-100 p-4 rounded-full">
                <svg
                  class="w-12 h-12 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Cancel Text */}
            <h1 class="text-2xl font-bold text-purple-700 mb-2">
              Payment Cancelled
            </h1>

            <p class="text-gray-600 mb-6">
              Your payment was cancelled or failed. Please try again to complete
              your order.
            </p>

            {/* Info Box */}
            <div class="bg-purple-50 p-4 rounded-lg mb-6">
              <p class="text-sm text-purple-500">Reason</p>
              <p class="font-semibold text-gray-700">Payment not completed</p>
            </div>

            {/* Buttons */}
            <div class="flex justify-center gap-4">
              <a
                href="/cart"
                class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
              >
                Try Again
              </a>

              <a
                href="/"
                class="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
export default Cancel