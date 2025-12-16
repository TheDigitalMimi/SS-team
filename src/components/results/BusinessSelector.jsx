export default function BusinessSelector({
  businesses,
  activeBusinessId,
  setActiveBusinessId
}) {
  return (
    <div className="flex items-center gap-4">
      <label className="font-semibold">Business:</label>
      <select
        value={activeBusinessId}
        onChange={(e) => setActiveBusinessId(e.target.value)}
        className="border rounded px-3 py-2"
      >
        {businesses.map((business) => (
          <option key={business.id} value={business.id}>
            {business.name}
          </option>
        ))}
      </select>
    </div>
  );
}
