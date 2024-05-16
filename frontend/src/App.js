import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import men_banner from "./Components/Assets/banner_men.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/hommes"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/femmes"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/enfants"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          <Route path="/produit" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/panier" element={<Cart />} />
          <Route path="/connexion" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
