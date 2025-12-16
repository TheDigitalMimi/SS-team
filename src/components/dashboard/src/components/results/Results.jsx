import BusinessSwitcher from "./BusinessSwitcher";
import CoreSection from "../results/CoreSection";
import GrowthSection from "../results/GrowthSection";
import RequestChangeBox from "../results/RequestChangeBox";

export default function CreateResults({
  businesses,
  activeBusinessId,
  setActiveBusinessId
}) {
  const business = businesses.find(b => b.id === activeBusinessId);

  if (!business) {
    return (
      <div className="p-8 text-gray-600">
        No business selected.
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy">
            {business.name}
          </h1>
          <p className="text-gray-600">
            Your private SolvedSuite dashboard
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="bg-teal text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal/90"
        >
          Print
        </button>
      </div>

      {/* Business Switcher */}
      <BusinessSwitcher
        businesses={businesses}
        activeBusinessId={activeBusinessId}
        setActiveBusinessId={setActiveBusinessId}
      />

      {/* CORE RESULTS */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4">
          Core Business Foundation
        </h2>

        <CoreSection core={business.core} />
      </section>

      {/* GROWTH RESULTS */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4">
          Growth & Marketing
        </h2>

        <GrowthSection growth={business.growth} />
      </section>

      {/* REQUEST CHANGE */}
      <section>
        <RequestChangeBox businessId={business.id} />
      </section>
    </div>
  );
}
