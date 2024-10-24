import { useEffect, useState } from "react";
import { baseUrl } from "../../../../frontend/src/utils/config";
import cross_icon from "../../assets/cross_icon.png";
import "./ListProducts.css";

const ListProducts = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfos = async () => {
    await fetch(`${baseUrl}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  const remmove_product = async (id) => {
    await fetch(`${baseUrl}/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfos();
  };

  return (
    <div className="list-products">
      <h1>All Products List</h1>
      <div className="listproducts-allproducts">
        <div className="listproducts-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <hr />
        {allproducts.map((product) => (
          <div key={product.id}>
            <div className="listproducts-format-main listproducts-format">
              <img
                src={product.image}
                alt=""
                className="listproducts-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => {
                  remmove_product(product.id);
                }}
                className="listproducts-remove-icon"
                src={cross_icon}
                alt=""
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
