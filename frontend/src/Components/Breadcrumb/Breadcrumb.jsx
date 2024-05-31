import arrow_icon from "../Assets/breadcrumb_arrow.png";
import "./Breadcrumb.css";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrumb;
