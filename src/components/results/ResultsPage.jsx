import BusinessSelector from "./BusinessSelector";
import CoreSection from "./CoreSection";
import GrowthSection from "./GrowthSection";
import RequestChangeBox from "./RequestChangeBox";

export default function ResultsPage({
  businesses,
  activeBusinessId,
  setActiveBusinessId
}) {
  const business = businesses.find(b => b.id === activeBusinessId);

  if (!business) {
    return <div className="p-8">No business selected.</div>;
  }

  // 🔒 Detect preview / starter mode
  const isPreview =
    !business.core ||
    Object.keys(business.core).length === 0;

  /* ===============================
     PREVIEW MODE (FREE)
     =============================== */
  if (isPreview) {
    return (
      <div className="p-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-10 text-center space-y-6">
          <h1 className="text-3xl font-bold text-navy">
            SolvedSuite Preview
          </h1>

          <p className="text-gray-600 text-lg">
            You’re viewing a limited preview of SolvedSuite.
          </p>

          <div className="border-t pt-6 text-left space-y-4">
            <p className="font-semibold text-gray-700">
              When unlocked, your dashboard will include:
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Full business plan</li>
              <li>SWOT analysis</li>
              <li>Branding & messaging</li>
              <li>Keyword & market research</li>
              <li>Ad copy, content plans, and growth strategy</li>
              <li>Unlimited refinements</li>
            </ul>
          </div>

          <div className="pt-6">
            <p className="text-sm text-gray-500 mb-4">
              Unlock the full system to build your real business.
            </p>

            <a
              href="/pricing"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ===============================
     FULL DASHBOARD (PAID)
     =============================== */
  return (
    <div className="p-8 space-y-10">
      <BusinessSelector
        businesses={businesses}
        activeBusinessId={activeBusinessId}
        setActiveBusinessId={setActiveBusinessId}
      />

      <CoreSection core={business.core} />

      <GrowthSection growth={business.growth} />

      <RequestChangeBox businessId={business.id} />
    </div>
  );
}
