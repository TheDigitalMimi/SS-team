import ResultsDisplay from "./ResultsDisplay";

export default function CoreSection({ core = {} }) {
  const {
    businessPlan = "No business plan generated yet.",
    swotAnalysis = "SWOT analysis will appear here.",
    keywordResearch = {
      primary: [],
      secondary: [],
      longTail: [],
      local: []
    },
    targetCustomers = "Target customer profile pending.",
    branding = "Branding details pending.",
    competitorAnalysis = "Competitor analysis pending.",
    financialProjections = "Financial projections pending."
  } = core;

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Core Business Foundation</h2>

      <ResultsDisplay results={businessPlan} />
      <ResultsDisplay results={swotAnalysis} />

      <ResultsDisplay
        results={
          `KEYWORD RESEARCH\n\n` +
          `Primary Keywords:\n${keywordResearch.primary.join(", ") || "—"}\n\n` +
          `Secondary Keywords:\n${keywordResearch.secondary.join(", ") || "—"}\n\n` +
          `Long-Tail Keywords:\n${keywordResearch.longTail.join(", ") || "—"}\n\n` +
          (keywordResearch.local.length
            ? `Local Keywords:\n${keywordResearch.local.join(", ")}`
            : "Local Keywords:\n—")
        }
      />

      <ResultsDisplay results={targetCustomers} />
      <ResultsDisplay results={branding} />
      <ResultsDisplay results={competitorAnalysis} />
      <ResultsDisplay results={financialProjections} />
    </section>
  );
}
