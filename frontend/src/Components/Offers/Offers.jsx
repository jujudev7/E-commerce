import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusivités</h1>
        <h2>Offres pour vous</h2>
        <p>SEULEMENT LES PRODUITS BEST SELLERS</p>
        <button>Découvre vite !</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
