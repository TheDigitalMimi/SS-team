import { Link } from 'react-router-dom';

const STRIPE_WEEKLY_PRICE = import.meta.env.VITE_STRIPE_WEEKLY_PRICE_ID;
const STRIPE_MONTHLY_PRICE = import.meta.env.VITE_STRIPE_MONTHLY_PRICE_ID;
const STRIPE_ANNUAL_PRICE = import.meta.env.VITE_STRIPE_ANNUAL_PRICE_ID;

function redirectToCheckout(priceId) {
  window.location.href = `/api/create-checkout-session?priceId=${priceId}`;
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SolvedSuite.
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your business. <span className="text-teal">Solved.</span>
          </h2>

          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Designed and built to be your team.
          </p>

          <p className="text-lg mb-4 max-w-3xl mx-auto">
            Created with women in mind — and built for anyone ready to start and grow a business.
          </p>

          <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-200">
            Whether you’re launching online, opening a physical location in your area,
            or running a hybrid business, SolvedSuite gives you a personalized roadmap
            without agency-level costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-block bg-teal hover:bg-teal/90 text-white text-xl font-bold py-4 px-12 rounded-lg transition"
            >
              View Holiday Pricing
            </a>

            <Link
              to="/auth"
              className="inline-block border-2 border-teal text-white text-xl font-bold py-4 px-12 rounded-lg hover:bg-teal/10 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-3">
            Holiday Sale Pricing
          </h2>

          <p className="text-center text-grey mb-2 max-w-2xl mx-auto text-lg">
            🎄 <strong>Limited-time Holiday Sale</strong>
          </p>

          <p className="text-center text-grey mb-10 max-w-2xl mx-auto">
            Lock in this discounted pricing for life.
            <br />
            <strong>Sale ends January 04, 2026.</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Weekly */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-2">Weekly</h3>

              <div className="mb-2">
                <span className="line-through text-grey mr-2">$30</span>
                <span className="text-4xl font-bold text-navy">$20</span>
              </div>

              <p className="text-grey mb-6">
                per week • holiday price locked in for life
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
              </ul>

              <button
                onClick={() => redirectToCheckout(STRIPE_WEEKLY_PRICE)}
                className="w-full py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy/90"
              >
                Lock in Weekly
              </button>
            </div>

            {/* Monthly */}
            <div className="bg-white p-8 rounded-lg border-4 border-teal shadow-xl scale-105">
              <div className="bg-teal text-white text-center py-2 -mt-8 -mx-8 mb-6 rounded-t-lg font-bold">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2">Monthly</h3>

              <div className="mb-2">
                <span className="line-through text-grey mr-2">$79</span>
                <span className="text-4xl font-bold text-navy">$39</span>
              </div>

              <p className="text-grey mb-6">
                per month • holiday price locked in for life
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
                <li className="text-grey">✓ Best value</li>
              </ul>

              <button
                onClick={() => redirectToCheckout(STRIPE_MONTHLY_PRICE)}
                className="w-full py-3 bg-teal text-white rounded-lg font-bold hover:bg-teal/90"
              >
                Lock in Monthly
              </button>
            </div>

            {/* Annual */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-2">Annual</h3>

              <div className="mb-2">
                <span className="line-through text-grey mr-2">$790</span>
                <span className="text-4xl font-bold text-navy">$390</span>
              </div>

              <p className="text-grey mb-6">
                per year • holiday price locked in for life
              </p>

              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
                <li className="text-grey">✓ Save $400 annually</li>
              </ul>

              <button
                onClick={() => redirectToCheckout(STRIPE_ANNUAL_PRICE)}
                className="w-full py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy/90"
              >
                Lock in Annual
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
