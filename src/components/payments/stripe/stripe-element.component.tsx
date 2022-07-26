import {loadStripe} from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import React from "react";

const StripeElementComponent = () => {
    return(<div>Hello World!</div>)
}


const PaymentGateway = () => {
    const stripePromise = loadStripe('pk_test_Hpa0K7PQIXM2i2STQXenukfE');

    return (
        <Elements stripe={stripePromise}>
            <StripeElementComponent/>
        </Elements>
    );
};
