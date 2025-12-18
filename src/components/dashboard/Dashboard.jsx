import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessForm from "./BusinessForm";
import BusinessSwitcher from "./BusinessSwitcher";
import LoadingState from "./LoadingState";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);

    // 🔹 later this is where AI / API call goes
    // for now we just simulate success
    setTimeout(() => {
      setLoading(false);
      navigate("/results");
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-10">
      <h1 className="text-3xl font-bold">
        Business Dashboard
      </h1>

      <BusinessSwitcher />

      {loading ? (
        <LoadingState />
      ) : (
        <BusinessForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}
