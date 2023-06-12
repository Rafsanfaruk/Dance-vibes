// import React from 'react';

import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <h2 className="text-4xl ">Payment</h2>
      <br />
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
