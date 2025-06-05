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

    setTimeout(() => {
      navigate('/checkout');
    }, 1500);
  };

  return (
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
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="John Maker"
              required
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
              required
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
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">State / Province</label>
            <input
              type="text"
              name="state"
              value={address.state || ''}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl shadow-sm border border-gray-200"
              placeholder="California"
              required
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
              required
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
