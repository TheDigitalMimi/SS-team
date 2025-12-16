import { useState } from "react";

export default function RequestChangeBox({ businessId }) {
  const [message, setMessage] = useState("");

  function submitRequest() {
    if (!message.trim()) return;

    // backend hookup later
    console.log("Change request for business:", businessId, message);

    setMessage("");
    alert("Your request has been sent to the team.");
  }

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold">Request a Change</h3>

      <textarea
        className="w-full border rounded p-3"
        rows={4}
        placeholder="Example: Please make the brand tone warmer or adjust the colors."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={submitRequest}
        className="bg-teal-600 text-white px-5 py-2 rounded"
      >
        Send Request
      </button>
    </div>
  );
}
