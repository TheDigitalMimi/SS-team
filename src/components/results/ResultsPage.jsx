import BusinessSelector from "./BusinessSelector";
import CoreSection from "./CoreSection";
import GrowthSection from "./GrowthSection";
import RequestChangeBox from "./RequestChangeBox";

export default function ResultsPage({
  businesses,
  activeBusinessId,
  setActiveBusinessId
}) {
  const business = businesses.find(
    (b) => b.id === activeBusinessId
  );

  if (!business) {
    return <div className="p-8">No business selected.</div>;
  }

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
