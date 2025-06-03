
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ItemView from './pages/ItemView';
import ShippingInfo from "./pages/ShippingPage";



export default function App() {
  

  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      
      {/* Standalone checkout (no layout) */}
      <Route path="/checkout" element={<Checkout />} />
<Route path="/shipping" element={<ShippingInfo />} />
      <Route path="/product/:id" element={<ItemView />} />
    </Routes>
  );
}
