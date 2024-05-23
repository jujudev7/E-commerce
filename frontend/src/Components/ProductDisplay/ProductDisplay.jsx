import { useContext } from "react";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-prices-old">
            {product.old_price} €
          </div>
          <div className="product-display-right-prices-new">
            {product.new_price} €
          </div>
        </div>
        <div className="product-display-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          nulla, totam error, consectetur accusantium assumenda autem quibusdam
          temporibus cumque ex possimus quas? Odio cumque accusantium delectus
          omnis voluptatum nobis perspiciatis.
        </div>
        <div className="product-display-right-size">
          <h1>Sélectionner la Taille</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          AJOUTER AU PANIER
        </button>
        <p className="product-display-right-category">
          <span>Catégorie :</span> Femme, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span> Moderne, Nouveau
        </p>
      </div>
    </div>
  );
};
