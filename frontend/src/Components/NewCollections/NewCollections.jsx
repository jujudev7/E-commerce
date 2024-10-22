import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/config";
import Item from "../Item/Item";
import "./NewCollections.css";

const NewCollections = () => {
  const [new_collections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/newcollections`)
      .then((response) => response.json())
      .then((data) => setNewCollections(data));
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
