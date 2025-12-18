export default function ResultsDisplay({ results }) {
  if (!results) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-400 italic">
          Content will appear here once available.
        </p>
      </div>
    );
  }

  if (typeof results === "object") {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
          {JSON.stringify(results, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
        {results}
      </div>
    </div>
  );
}
