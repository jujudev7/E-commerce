import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Produits</p>
        <p>Nom</p>
        <p>Prix</p>
        <p>Quantité</p>
        <p>Total</p>
        <p>Supprimer</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price} €</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} €</p>
                <img
                  className="cart-items-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Supprimer"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Total du Panier</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Sous-total</p>
              <p>{getTotalCartAmount()} €</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Frais de Livraison</p>
              <p>Gratuit</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()} €</h3>
            </div>
          </div>
          <button>PROCÉDER AU PAIEMENT</button>
        </div>
        <div className="cart-items-promocode">
          <p>Si vous avez un code promo, entrez-le ici :</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="CODE PROMO" />
            <button>Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  );
};
