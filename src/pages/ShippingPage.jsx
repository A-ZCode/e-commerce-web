import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, toggleSaveAsDefault } from '../app/addressSlice';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShippingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const address = useSelector((state) => state.address) || {};
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAddress({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Information has been added');

    // Optional delay for message visibility
    setTimeout(() => {
      navigate('/checkout'); // Adjust this path to your actual checkout route
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg space-y-4" >
      <div>
        <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700" >Shipping Name</label>
      </div>
      <input
      placeholder='John Maker'
        type="text"
        id="name"
        name="name"
        value={shippingAddress.Shipping_Name}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
      <div>
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Shipping Address</label>
      </div>
      <input
      placeholder='123 Plae Grond Stret'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.Shipping_Address}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
      <div>
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">City</label>
      </div>
      <input
      placeholder='Vermont'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.City}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      /></div>
      <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Shipping Name</label>
            <input
              type="text"
              name="name"
              value={address.name || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none"
              placeholder="John Maker"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Street Name</label>
            <input
              type="text"
              name="street"
              value={address.street || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="123 Plae Grond Stret"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              type="text"
              name="city"
              value={address.city || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="Vermont"
            />
          </div>

          <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">State</label>
      </div>
      <input
      placeholder='California'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.State}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      /></div>
      <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Country</label>
      </div>
      <input
      placeholder='United States of America'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.Country}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      
<div>
      <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md" >Add Address</button>
    </div>
            <label className="text-sm text-gray-600">State / Province</label>
            <input
              type="text"
              name="state"
              value={address.state || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="California"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Country</label>
            <input
              type="text"
              name="country"
              value={address.country || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="United States of America"
            />
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <input
              type="checkbox"
              checked={address.saveAsDefault || false}
              onChange={() => dispatch(toggleSaveAsDefault())}
              className="accent-green-600 w-4 h-4"
            />
            <label className="text-sm text-gray-700">Save this as your default address</label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add Address
          </button>

          {message && (
            <p className="text-green-600 text-sm font-medium text-center mt-2">{message}</p>
          )}

          <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="underline"
            >
              Back
            </button>

            <div className="flex items-center text-green-500 font-medium">
              <Lock className="w-4 h-4 mr-1" />
              Secure Connection
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;
