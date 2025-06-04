import React from 'react';
import Sidebar from '../components/Sidebar';
import BagPanel from '../components/BagPanel';
import BagItems from '../components/BagItems';

const ProductsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-[5rem] bg-white border-r" />

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Check your Bag Items</h1>
        <BagItems />
      </main>

      {/* Right bag panel */}
      <BagPanel />
    </div>
  );
};

export default ProductsPage;
