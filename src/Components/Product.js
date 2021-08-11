import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
//import { Dispatch } from "react";
function Product({ price, id, title, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="productinfo">
        <p>{title}</p>
      </div>
      <div className="productprice">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div className="productrating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
