import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="checkoutimage" src={image} />
      <div className="checkoutinfo">
        <p className="checkouttitle">{title}</p>
        <p className="checkoutprice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutrating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hidebutton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
// import React from "react";
// import "./CheckoutProduct.css";
// import { useStateValue } from "../StateProvider";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// function CheckoutProduct({ id, image, title, price, rating }) {
//   const [{ basket }, dispatch] = useStateValue();

//   const removeFromBasket = () => {
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id,
//     });
//     // toast("Item removed from basket!");
//   };

//   return (
//     <div className="checkoutProduct">
//       <img src={image} alt="" className="checkoutProduct__image" />
//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <p className="checkoutProduct__rating">
//           {Array(rating)
//             .fill()
//             .map((rate) => (
//               <p>⭐</p>
//             ))}
//         </p>
//         <button onClick={removeFromBasket}>Remove from basket</button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;
