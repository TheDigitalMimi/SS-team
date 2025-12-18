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
    return (
      <div className="p-8 text-gray-600">
        No business selected.
      </div>
    );
  }

  // If results do not exist yet, do NOT fake them
  const hasCoreResults =
    business.core && Object.keys(business.core).length > 0;

  const hasGrowthResults =
    business.growth && Object.keys(business.growth).length > 0;

  if (!hasCoreResults && !hasGrowthResults) {
    return (
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-navy mb-4">
          Results Not Available Yet
        </h1>

        <p className="text-gray-600">
          Once your business strategy is created, your results will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-12">
      <BusinessSelector
        businesses={businesses}
        activeBusinessId={activeBusinessId}
        setActiveBusinessId={setActiveBusinessId}
      />

      {hasCoreResults && (
        <CoreSection core={business.core} />
      )}

      {hasGrowthResults && (
        <GrowthSection growth={business.growth} />
      )}

      <RequestChangeBox businessId={business.id} />
    </div>
  );
}

