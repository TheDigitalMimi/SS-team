import ResultsDisplay from "./ResultsDisplay";

export default function CoreSection({ core }) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Core Business Foundation</h2>

      <ResultsDisplay results={core.businessPlan} />
      <ResultsDisplay results={core.swotAnalysis} />

      <ResultsDisplay
        results={
          `KEYWORD RESEARCH\n\n` +
          `Primary Keywords:\n${core.keywordResearch.primary.join(", ")}\n\n` +
          `Secondary Keywords:\n${core.keywordResearch.secondary.join(", ")}\n\n` +
          `Long-Tail Keywords:\n${core.keywordResearch.longTail.join(", ")}\n\n` +
          (core.keywordResearch.local
            ? `Local Keywords:\n${core.keywordResearch.local.join(", ")}`
            : "")
        }
      />

      <ResultsDisplay results={core.targetCustomers} />
      <ResultsDisplay results={core.branding} />
      <ResultsDisplay results={core.competitorAnalysis} />
      <ResultsDisplay results={core.financialProjections} />
    </section>
  );
}
