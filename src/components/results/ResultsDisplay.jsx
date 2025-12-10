export default function ResultsDisplay({ results }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="prose max-w-none">
        <div className="whitespace-pre-wrap text-grey leading-relaxed">
          {results}
        </div>
      </div>
    </div>
  );
}
