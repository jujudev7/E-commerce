import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/hommes" element={<ShopCategory category="men" />} />
          <Route path="/femmes" element={<ShopCategory category="women" />} />
          <Route path="/enfants" element={<ShopCategory category="kids" />} />
          <Route path="/produit" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/panier" element={<Cart />} />
          <Route path="/connexion" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
