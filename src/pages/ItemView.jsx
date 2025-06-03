import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Sidebag from '../components/BagPanel'; // Make sure this is the correct path
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ItemView = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products?.items?.find((item) => item.id === parseInt(id))
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  if (!product) {
    return <div className="text-center text-red-600">Product not found!</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="hidden md:block w-1/5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-4">
          <a href="/" className="flex items-center text-blue-600 hover:underline">
            <FaArrowLeft className="mr-2" />
            Back
          </a>
        </div>

        {/* Product images */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Side thumbnails */}
          <div className="flex md:flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <img key={i} className="w-20 h-20 object-cover border" src={product.image} alt={product.name} />
            ))}
          </div>

          {/* Main image */}
          <img className="w-full md:w-1/2 object-contain border rounded-lg" src={product.image} alt={product.name} />

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <h3 className="text-md text-gray-600 mb-2">{product.description}</h3>

            {/* Rating */}
            <div className="flex text-yellow-500 mb-2">
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star text-gray-400" />
              <span className="fa fa-star text-gray-400" />
            </div>

            {/* Price */}
            <h4 className="text-xl font-semibold text-green-600 mb-2">${product.price.toFixed(2)}</h4>

            {/* Description */}
            <p className="text-gray-700 mb-4">{product.detailedDescription}</p>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 flex items-center"
            >
              <i className="fa-solid fa-bag-shopping-plus mr-2" />
              Add to bag
            </button>
          </div>
        </div>

        <hr className="my-6" />

        <h2 className="text-lg font-bold mb-2">Description</h2>
        <p className="text-gray-700">{product.longDescription}</p>
      </div>

      {/* Bag Panel on the right */}
      <div className="hidden lg:block w-1/5 border-l bg-white">
        <Sidebag />
      </div>
    </div>
  );
};

export default ItemView;
