import AdSetDisplay from "./AdSetDisplay";
import ResultsDisplay from "./ResultsDisplay";

export default function GrowthSection({ growth }) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Growth & Marketing</h2>

      {growth.adSets.map((adSet) => (
        <AdSetDisplay key={adSet.id} adSet={adSet} />
      ))}

      <ResultsDisplay results={growth.contentCalendar} />
    </section>
  );
}
