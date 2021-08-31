// import React, { useEffect, useState } from "react";
// import "./OrderItem.css";
// import { getBasketTotal } from "../reducer";
// //import CartProducts from "../CartProducts/CartProducts";
// import moment from "moment";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "../StateProvider";
// import { db } from "../firebase";
// import OrderItem from "./Order";
// function Order({ order }) {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         .doc(user?.id)
//         .collection("orders")
//         .orderBy("created", "desc")
//         .onSnapshot((snapshot) => {
//           setOrders(
//             snapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           );
//         });
//     } else {
//       setOrders([]);
//     }
//   }, []);
//   return (
//     <div className="order">
//       <h1>Your Orders</h1>
//       <div className="orderitem">
//         {orders?.map((order) => {
//           <Order order={order} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Order;
