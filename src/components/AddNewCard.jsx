import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddNewCard() {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateCardNumber = (num) => /^\d{16}$/.test(num.replace(/\s+/g, ''));
  const validateExpiryDate = (date) => /^(0[1-9]|1[0-2])\/\d{4}$/.test(date);
  const validateCvc = (code) => /^\d{3}$/.test(code);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required.';
    if (!validateCardNumber(cardNumber)) newErrors.cardNumber = 'Card number must be 16 digits.';
    if (!validateExpiryDate(expiryDate)) newErrors.expiryDate = 'Expiry date must be in MM/YYYY format.';
    if (!validateCvc(cvc)) newErrors.cvc = 'CVC must be 3 digits.';

    if (Object.keys(newErrors).length === 0) {
      alert('Card approved!');
      navigate('/checkout');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Cardholder Name</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.cardholderName && <p className="text-red-500 text-sm">{errors.cardholderName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 border rounded"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium">Expiry Date (MM/YYYY)</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YYYY"
              className="w-full p-2 border rounded"
            />
            {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">CVC</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              maxLength={3}
              className="w-full p-2 border rounded"
            />
            {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 w-[93%] rounded hover:bg-gray-800 transition"
        >
          Add Payment
        </button>
      </form>

       <div className="mt-6 flex justify-between items-center w-[90%] mx-auto text-sm text-gray-600">
        <div className="flex items-center">
          <i className="fas fa-lock text-base mr-2" />
          <span>Secure Connection</span>
        </div>
       <button
              type="button"
              onClick={() => navigate(-1)}
              className="underline"
            >
              Back
            </button>
      </div>
    </div>
    
  );
}
