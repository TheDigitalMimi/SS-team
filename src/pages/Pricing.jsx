import React from "react";

const STRIPE_WEEKLY_PRICE = import.meta.env.VITE_STRIPE_WEEKLY_PRICE_ID;

async function redirectToCheckout() {
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: STRIPE_WEEKLY_PRICE,
        email: "test@solvedsuite.com",     // TEMP until auth is wired
        firstName: "Test",                 // TEMP until auth is wired
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.url) {
      console.error("Checkout error:", data);
      alert(data?.error || "Checkout failed");
      return;
    }

    // ✅ Stripe returns a FULL https:// URL
    window.location.href = data.url;

  } catch (error) {
    console.error("Checkout exception:", error);
    alert("Checkout error");
  }
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white border-4 border-teal-600 rounded-2xl shadow-2xl p-10 text-center">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          SolvedSuite Weekly Access
        </h1>

        <p className="text-gray-600 mb-8">
          Holiday pricing locked in
        </p>

        {/* Price */}
        <div className="mb-8">
          <span className="line-through text-gray-400 mr-2">$30</span>
          <span className="text-5xl font-extrabold text-slate-900">$20</span>
          <p className="text-gray-500 mt-2">per week</p>
        </div>

        {/* Features */}
        <ul className="text-left space-y-3 mb-10 text-slate-700">
          <li>✓ Full business plan</li>
          <li>✓ SWOT & competitor analysis</li>
          <li>✓ Website & email copy</li>
          <li>✓ Marketing & social strategy</li>
          <li>✓ Financial projections & SEO</li>
          <li>✓ Up to 5 businesses</li>
          <li>✓ Unlimited refreshes</li>
        </ul>

        {/* Button */}
        <button
          onClick={redirectToCheckout}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
        >
          Unlock SolvedSuite
        </button>

        <p className="mt-6 text-sm text-gray-500">
          Secure checkout powered by Stripe
        </p>

      </div>
    </div>
  );
}
