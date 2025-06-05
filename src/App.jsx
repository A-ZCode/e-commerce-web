import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ItemView from './pages/ItemView';
import ShippingInfo from "./pages/ShippingPage";
import PaymentGateway from './pages/Payment';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>

      {/* Standalone checkout (no layout) */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping" element={<ShippingInfo />} />
      <Route path="/payment" element={<PaymentGateway />} />
      {/* Item view for a specific product */}
      <Route path="/product/:id" element={<ItemView />} />
    </Routes>
  );
}
