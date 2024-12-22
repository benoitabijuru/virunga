"use client"
import React, { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import 'tailwindcss/tailwind.css';

const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement! },
      });

      if (result.error) {
        setMessage(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent?.status === 'succeeded') {
        setMessage('Donation successful. Thank you for your support!');
      }
    } catch (error: any) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        min="1"
        placeholder="Enter donation amount (USD)"
        className="w-full px-4 py-2 border rounded-lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <CardElement className="p-4 border rounded-lg" />
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Donate
      </button>
      {message && <p className="text-center text-lg text-green-600">{message}</p>}
    </form>
  );
};

const DonationPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className="mb-6 text-3xl font-bold text-center text-green-700">
      Make a Donation
    </h1>
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  </div>
);

export default DonationPage;
