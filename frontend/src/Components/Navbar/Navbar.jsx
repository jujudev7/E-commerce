import { useContext, useRef, useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPMOI</p>
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Boutique</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/hommes">Hommes</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/femmes">Femmes</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/enfants">Enfants</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/connexion">
          <button>Connexion</button>
        </Link>
        <Link to="/panier">
          <img src={cart_icon} alt="" width="36" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
