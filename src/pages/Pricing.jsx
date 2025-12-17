const STRIPE_WEEKLY_PRICE = import.meta.env.VITE_STRIPE_WEEKLY_PRICE_ID;

async function redirectToCheckout(priceId) {
  try {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data?.error || 'Checkout failed');
      return;
    }

    window.location.href = data.url;
  } catch (err) {
    console.error(err);
    alert('Checkout error');
  }
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full bg-white border-4 border-teal p-8 rounded-xl shadow-xl text-center">

        <h1 className="text-3xl font-bold text-navy mb-4">
          SolvedSuite Weekly Access
        </h1>

        <p className="text-gray-600 mb-6">
          Holiday pricing locked in
        </p>

        <div className="mb-6">
          <span className="line-through text-gray-400 mr-2">$30</span>
          <span className="text-5xl font-bold text-navy">$20</span>
          <p className="text-gray-500 mt-2">per week</p>
        </div>

        <ul className="text-left space-y-2 mb-8">
          <li>✓ Full business plan</li>
          <li>✓ SWOT & competitor analysis</li>
          <li>✓ Website & email copy</li>
          <li>✓ Marketing & social strategy</li>
          <li>✓ Financials & SEO</li>
        </ul>

        <button
          onClick={() => redirectToCheckout(STRIPE_WEEKLY_PRICE)}
          className="w-full bg-teal text-white py-3 rounded-lg font-bold text-lg hover:bg-teal/90"
        >
          Unlock SolvedSuite
        </button>

      </div>
    </div>
  );
}
