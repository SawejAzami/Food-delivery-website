import React from "react";

const Success = () => {
  return (
    <>
      <div className="bg-purple-50 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md border border-purple-100">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <svg
                className="w-12 h-12 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-purple-700 mb-2">
            Payment Successful
          </h1>

          <p className="text-gray-600 mb-6">
            Your payment has been completed successfully. Thank you for your
            order!
          </p>

          <a
            href="/"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default Success;
