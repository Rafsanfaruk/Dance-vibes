// import React from 'react';

import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-full">
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <h2 className="text-4xl ">Payment</h2>
      <br />
      <Elements stripe={stripePromise}>
        <CheckOutForm  price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
