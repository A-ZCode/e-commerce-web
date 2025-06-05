import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Sidebag from '../components/BagPanel';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ItemView = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products?.items?.find((item) => item.id === parseInt(id))
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  if (!product) {
    return <div className="text-center text-red-600">Product not found!</div>;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block w-1/6 border-r bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 bg-gray-100">
        {/* Back Button */}
        <div className="mb-4">
          <a href="/" className="flex items-center text-gray-700 hover:underline">
            <FaArrowLeft className="mr-2" />
            Back
          </a>
        </div>

        <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md">
          {/* Left Side: Images */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2">
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  src={product.image}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="w-16 h-16 object-cover border rounded"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-64 object-contain rounded"
              />
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 text-sm mt-1">Series 5 SE</p>

            {/* Rating */}
            <div className="flex items-center mt-2 text-yellow-500">
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star-half-alt text-gray-300 mr-2" />
              <span className="text-sm text-gray-600 ml-2">4.5 / 5</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-semibold text-green-600 mt-4">
              ${product.price.toFixed(2)}
            </div>

            {/* Short Description */}
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis...
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Add to Bag
            </button>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{product.longDescription}</p>
        </div>
      </div>

      {/* Bag Panel */}
      <div className="hidden lg:block w-1/5 border-l bg-white p-4">
        <Sidebag />
      </div>
    </div>
  );
};

export default ItemView;
