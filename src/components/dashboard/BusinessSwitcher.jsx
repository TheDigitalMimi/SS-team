export default function BusinessSwitcher({ businesses, currentBusiness, onSelect, onNewBusiness, maxBusinesses }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          {businesses.map(business => (
            <button
              key={business.id}
              onClick={() => onSelect(business)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                currentBusiness?.id === business.id
                  ? 'bg-teal text-white'
                  : 'bg-gray-100 text-navy hover:bg-gray-200'
              }`}
            >
              {business.name}
            </button>
          ))}
        </div>
        
        {businesses.length < maxBusinesses && (
          <button
            onClick={onNewBusiness}
            className="bg-navy hover:bg-navy/90 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            + New Business
          </button>
        )}
      </div>
    </div>
  );
}
