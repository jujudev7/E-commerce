import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./Breadcrumb.css";

export const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      ACCUEIL <img src={arrow_icon} alt="" /> BOUTIQUE{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
