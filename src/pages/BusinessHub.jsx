import { Link } from 'react-router-dom';

export default function BusinessHub() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            SolvedSuite Business Hub
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your complete business system — organized, personalized,
            and built to support real businesses.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy text-center mb-4">
            Your Complete Business Team
          </h2>

          <p className="text-center text-grey max-w-3xl mx-auto mb-14">
            SolvedSuite adapts to your industry, your location,
            and whether your business is online, physical, or both.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['Business Plan', 'Clear roadmap tailored to your idea and goals'],
              ['SWOT Analysis', 'Strengths, weaknesses, opportunities, and threats'],
              ['Brand Identity System', 'Colors, fonts, tone, and messaging'],
              ['Customer Target Profile', 'Who to reach and where to find them'],
              ['Keyword Research', 'Search terms people actually use'],
              ['Local Market Research', 'Demand and opportunities in your area'],
              ['Product Ideas', 'What to sell online or locally'],
              ['Service Development', 'How to structure and price services'],
              ['Supplier Guidance', 'Where to source products or materials'],
              ['Pricing Strategy', 'Competitive and profitable pricing'],
              ['Marketing Strategy', 'Funnels and growth planning'],
              ['Ads & Scripts', 'Platform-ready copy and CTAs'],
              ['Email Sequences', 'Follow-ups that convert'],
              ['Social Content Plan', 'Consistent posting strategy'],
              ['Launch Checklist', 'Step-by-step execution tasks'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-navy mb-2">
                  {title}
                </h3>
                <p className="text-grey text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Why Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">
            Why SolvedSuite
          </h2>

          <p className="text-lg text-grey max-w-3xl mx-auto">
            Instead of juggling agencies, consultants, and endless advice,
            SolvedSuite keeps everything in one place — so you always know
            what to work on next.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Access the Business Hub
          </h2>

          <p className="text-xl mb-10 text-gray-200">
            Start with clarity instead of confusion.
          </p>

          <Link
            to="/auth"
            className="inline-block bg-teal hover:bg-teal/90 text-white text-xl font-bold py-4 px-12 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
