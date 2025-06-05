import React, { useState } from 'react';

function ShippingInfo  () {
  const [shippingAddress, setShippingAddress] = useState({
    Shipping_Name: '',
    Street_Name: '',
    City: '',
    State: '',
    Country: '',
   
  });
const [saveAsDefault, setSaveAsDefault] = useState(false);
  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping information:', shippingAddress);
 console.log('Save as default:', saveAsDefault);
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

     <div>
        <label>
          <input
            type="checkbox"
            checked={saveAsDefault}
            onChange={(e) => setSaveAsDefault(e.target.checked)}
          />{' '}
          Save this as your default address
        </label>
      </div>
    </form>
  );
};

export default ShippingInfo;