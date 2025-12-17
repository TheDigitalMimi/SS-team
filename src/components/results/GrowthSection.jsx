import AdSetDisplay from "./AdSetDisplay";
import ResultsDisplay from "./ResultsDisplay";

export default function GrowthSection({ growth = {} }) {
  const {
    adSets = [],
    contentCalendar = "Content calendar will appear here."
  } = growth;

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Growth & Marketing</h2>

      {adSets.length > 0 ? (
        adSets.map((adSet) => (
          <AdSetDisplay key={adSet.id} adSet={adSet} />
        ))
      ) : (
        <ResultsDisplay results="Ad strategy will appear here." />
      )}

      <ResultsDisplay results={contentCalendar} />
    </section>
  );
}
