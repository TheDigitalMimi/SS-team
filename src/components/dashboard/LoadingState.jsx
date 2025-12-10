export default function LoadingState({ firstName }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal border-t-transparent"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-navy mb-4">
        Your Team is Working...
      </h2>
      
      <p className="text-grey text-lg mb-6">
        {firstName}, your business strategy team is assembling your complete package. This typically takes 30-60 seconds.
      </p>
      
      <div className="space-y-3 text-left max-w-md mx-auto">
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Strategy Lead analyzing your business model...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Brand Designer creating your identity...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Market Researcher gathering insights...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Marketing Director planning your launch...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Creative Director designing your ads...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Content Manager building your social strategy...</span>
        </div>
        <div className="flex items-center text-grey">
          <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
          <span>Copywriter crafting your messaging...</span>
        </div>
      </div>
    </div>
  );
}
