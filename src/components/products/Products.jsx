import React from "react";

const Products = () => {
  return (
    <section className="h-[879px] px-[130px] mt-[160px] border">
      <div className="product-section">
        <div className="flex space-x-4 overflow-x-auto p-4">
          <button className="bg-[#E1C06E] text-black rounded-full px-6 py-2 whitespace-nowrap">
            All
          </button>
          <button className="bg-gray-800 text-white rounded-full px-6 py-2 whitespace-nowrap hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-600">
            Best Selling Products
          </button>
          {/* Add other category buttons here */}
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="bg-gray-800 rounded-lg p-4 text-white">
            <img
              src="/path/to/product-image.png"
              alt="Product Name"
              className="w-full rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-sm text-gray-400 mb-2">Product Description</p>
            <p className="text-xl font-bold">$Price</p>
            <span className="text-xs bg-yellow-400 text-black rounded-full px-2 py-1">
              Recurring Plan
            </span>
          </div>
          {/* Add other product cards here */}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-gray-800 text-white rounded-full p-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-gray-800 text-white rounded-full p-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
