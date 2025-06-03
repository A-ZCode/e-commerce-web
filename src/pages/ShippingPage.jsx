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
    <form onSubmit={handleSubmit} >
      <div>
        <div>
      <label htmlFor="name">Shipping Name</label>
      </div>
      <input
      placeholder='John Maker'
        type="text"
        id="name"
        name="name"
        value={shippingAddress.Shipping_Name}
        onChange={handleChange}
        required
      />
      </div>
      <div>
        <div>
        <label htmlFor="name">Shipping Address</label>
      </div>
      <input
      placeholder='123 Plae Grond Stret'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.Shipping_Address}
        onChange={handleChange}
        required
      />
      </div>
      <div>
        <div>
        <label htmlFor="name">City</label>
      </div>
      <input
      placeholder='Vermont'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.City}
        onChange={handleChange}
        required
      /></div>
      <div>
          <div>
        <label htmlFor="name">State</label>
      </div>
      <input
      placeholder='California'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.State}
        onChange={handleChange}
        required
      /></div>
      <div>
            <label htmlFor="name">Country</label>
      </div>
      <input
      placeholder='United States of America'
        type="text"
        id="name"
        Shipping Name="name"
        value={shippingAddress.Country}
        onChange={handleChange}
        required
      />

      
<div>
      <button type="submit">Add Address</button>
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