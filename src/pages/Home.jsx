import { Link } from 'react-router-dom';

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
              Learn More
            </a>

            <Link 
              to="/auth" 
              className="inline-block border-2 border-teal text-white text-xl font-bold py-4 px-12 rounded-lg hover:bg-teal/10 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-12">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Weekly */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-2">Weekly</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$20</span>
                <span className="text-grey"> per week</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
              </ul>
              <Link to="/auth" className="block w-full text-center py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy/90">
                Choose Weekly
              </Link>
            </div>

            {/* Monthly */}
            <div className="bg-white p-8 rounded-lg border-4 border-teal shadow-xl scale-105">
              <div className="bg-teal text-white text-center py-2 -mt-8 -mx-8 mb-6 rounded-t-lg font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Monthly</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$39</span>
                <span className="text-grey"> per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
                <li className="text-grey">✓ Best value</li>
              </ul>
              <Link to="/auth" className="block w-full text-center py-3 bg-teal text-white rounded-lg font-bold hover:bg-teal/90">
                Choose Monthly
              </Link>
            </div>

            {/* Annual */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-2">Annual</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$390</span>
                <span className="text-grey"> per year</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-grey">✓ Complete business strategy</li>
                <li className="text-grey">✓ Up to 5 businesses</li>
                <li className="text-grey">✓ Unlimited adjustments</li>
                <li className="text-grey">✓ Download as PDF</li>
                <li className="text-grey">✓ Save $78/year</li>
              </ul>
              <Link to="/auth" className="block w-full text-center py-3 bg-navy text-white rounded-lg font-bold hover:bg-navy/90">
                Choose Annual
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
