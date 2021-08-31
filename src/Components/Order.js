// import React, { useState } from "react";
// import moment from "moment";
// import CurrencyFormat from "react-currency-format";
// import CheckoutProduct from "./CheckoutProduct";
// //from moment
// function OrderItem(order) {
//   return (
//     <div className="order">
//       <h2>Order</h2>
//       <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
//       <p className="order_id">
//         <small>{order.id}</small>
//       </p>
//       {order.data.basket?.map((item) => {
//         <CheckoutProduct
//           id={item.id}
//           title={item.title}
//           image={item.image}
//           price={item.price}
//           rating={item.rating}
//           hidebutton
//         />;
//       })}
//       <CurrencyFormat
//         renderText={(value) => <h3>Order Total: {value}</h3>}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType="text"
//         thousandSeperator={true}
//         prefix="$"
//       />
//     </div>
//   );
// }

// export default OrderItem;
