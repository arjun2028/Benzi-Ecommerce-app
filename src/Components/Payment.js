import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Checkout from "./Checkout";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        {/* payment section-delivery address */}
        <div className="section">
          <div className="title">
            <h3>Delivery Address</h3>
          </div>
          <div className="address">
            <p>{user?.email}</p>
            <p>7, Lok Kalyan Marg</p>
            <p>New Delhi</p>
          </div>
        </div>

        {/* review items */}
        <div className="section">
          <div className="title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="items">
            {/* {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))} */}
          </div>
        </div>
        {/* payment method */}
        <div className="section">
          <div className="title">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentdetail"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
