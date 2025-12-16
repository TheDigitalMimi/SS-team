import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About SolvedSuite
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A clearer, more affordable way to build your business — without agencies,
            guesswork, or overwhelm.
          </p>
        </div>
      </section>

      {/* Why SolvedSuite Exists */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy mb-6">
            Why SolvedSuite Exists
          </h2>

          <p className="text-lg text-grey mb-6">
            Women and small-town entrepreneurs have ideas worth building — but the system
            around them is broken.
          </p>

          <p className="text-lg text-grey mb-6">
            Most people don’t get stuck because they aren’t capable. They get stuck because
            agencies charge thousands of dollars, information is scattered everywhere,
            and you’re expected to figure everything out alone.
          </p>

          <p className="text-lg text-grey">
            SolvedSuite exists to remove those barriers and replace them with structure,
            clarity, and direction.
          </p>
        </div>
      </section>

      {/* What SolvedSuite Does */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy mb-6">
            What SolvedSuite Does
          </h2>

          <p className="text-lg text-grey mb-6">
            SolvedSuite becomes <strong>your agency team</strong> — bringing together the
            roles most businesses can’t afford early on.
          </p>

          <p className="text-lg text-grey mb-6">
            Instead of hiring a strategist, marketer, copywriter, and ad manager separately,
            SolvedSuite gives you all of it in one place.
          </p>

          <ul className="space-y-4 text-lg text-grey mb-8">
            <li>• A clear business plan built around your idea</li>
            <li>• Market and customer insights tailored to your location</li>
            <li>• Branding direction that fits your business, not a template</li>
            <li>• Product or service ideas that make sense for how and where you operate</li>
          </ul>

          <p className="text-lg text-grey mb-6">
            And most importantly — execution guidance, not just strategy.
          </p>

          <p className="text-lg text-grey mb-6">
            SolvedSuite tells you <strong>exactly what to post, where to post it, and what to say</strong>,
            including:
          </p>

          <ul className="space-y-4 text-lg text-grey">
            <li>• Social media content broken down by platform</li>
            <li>• What to post on Facebook, Instagram, TikTok, and Pinterest (when relevant)</li>
            <li>• Ad copy and messaging for different platforms</li>
            <li>• Email copy for follow-ups, launches, and promotions</li>
            <li>• Clear calls to action so you always know what to do next</li>
          </ul>

          <p className="text-lg text-grey mt-8">
            Everything lives inside one organized workspace, so instead of wondering
            “What should I do today?” — you always know your next move.
          </p>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy mb-6">
            Who It’s Built For
          </h2>

          <p className="text-lg text-grey mb-6">
            SolvedSuite was created with women in mind — especially those building from
            smaller towns or limited resources — but it’s built for anyone who wants
            a clearer path forward.
          </p>

          <ul className="space-y-4 text-lg text-grey">
            <li>• Online, physical, and hybrid businesses</li>
            <li>• Entrepreneurs who don’t want to pay agency prices</li>
            <li>• Founders tired of guessing what to do next</li>
            <li>• People who want guidance that adapts to their situation</li>
          </ul>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy mb-6">
            What Makes SolvedSuite Different
          </h2>

          <p className="text-lg text-grey mb-6">
            SolvedSuite isn’t a template library or a generic tool.
          </p>

          <p className="text-lg text-grey mb-6">
            It adjusts based on your business idea, your location, and whether you’re
            online, physical, or hybrid — so the guidance you get actually fits.
          </p>

          <p className="text-lg text-grey">
            As your business grows, SolvedSuite grows with you.
          </p>
        </div>
      </section>

      {/* CTA — EXACT APPROVED COPY */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to see how it works?
          </h2>

          <p className="text-xl mb-10 text-gray-200">
            Explore pricing or start free and get a preview of your personalized business plan.
          </p>

          <Link
            to="/#pricing"
            className="inline-block bg-teal hover:bg-teal/90 text-white text-xl font-bold py-4 px-12 rounded-lg transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

    </div>
  );
}
