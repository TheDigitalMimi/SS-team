export default function AdSetDisplay({ adSet }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {adSet.images.map((img, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-2">
          <img
            src={img.imageUrl}
            alt="Ad creative"
            className="rounded-md w-full"
          />
          <h4 className="font-semibold">{img.headline}</h4>
          <p>{img.copy}</p>
          <p className="text-sm text-gray-500">
            Platform: {img.platform}
          </p>
          <p className="text-sm text-gray-500">
            CTA: {img.cta}
          </p>
        </div>
      ))}
    </div>
  );
}
