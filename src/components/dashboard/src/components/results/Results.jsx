import { useState } from 'react';
import ResultsDisplay from './ResultsDisplay';

export default function Results({ business, user }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = () => {
    setDownloading(true);
    
    // Create a simple text file download
    const blob = new Blob([business.results], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${business.name}_strategy.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    setDownloading(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-navy">{business.name} Strategy</h2>
        <button
          onClick={handleDownloadPDF}
          disabled={downloading}
          className="bg-teal hover:bg-teal/90 text-white font-bold py-2 px-6 rounded-lg transition disabled:opacity-50"
        >
          {downloading ? 'Downloading...' : 'Download'}
        </button>
      </div>

      <ResultsDisplay results={business.results} />
    </div>
  );
}
