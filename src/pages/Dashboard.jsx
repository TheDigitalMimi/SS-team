import { useState, useEffect } from 'react';
import { getUserBusinesses } from '../services/supabase';
import BusinessForm from '../components/dashboard/BusinessForm';
import BusinessSwitcher from '../components/dashboard/BusinessSwitcher';
import Results from '../components/results/Results';
import LoadingState from '../components/dashboard/LoadingState';

export default function Dashboard({ user }) {
  const [businesses, setBusinesses] = useState([]);
  const [currentBusiness, setCurrentBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadBusinesses();
  }, [user]);

  const loadBusinesses = async () => {
    const { data, error } = await getUserBusinesses(user.id);
    if (!error && data) {
      setBusinesses(data);
      if (data.length > 0) {
        setCurrentBusiness(data[0]);
      } else {
        setShowForm(true);
      }
    }
    setLoading(false);
  };

  const handleBusinessCreated = (newBusiness) => {
    setBusinesses([newBusiness, ...businesses]);
    setCurrentBusiness(newBusiness);
    setShowForm(false);
  };

  const handleStartNewBusiness = () => {
    if (businesses.length >= 5) {
      alert('You can have a maximum of 5 businesses. Please delete one to add another.');
      return;
    }
    setCurrentBusiness(null);
    setShowForm(true);
  };

  const handleBusinessSelect = (business) => {
    setCurrentBusiness(business);
    setShowForm(false);
  };

  const handleGenerationStart = () => {
    setGenerating(true);
  };

  const handleGenerationComplete = (updatedBusiness) => {
    setGenerating(false);
    setCurrentBusiness(updatedBusiness);
    const updatedBusinesses = businesses.map(b => 
      b.id === updatedBusiness.id ? updatedBusiness : b
    );
    setBusinesses(updatedBusinesses);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-navy text-xl">Loading your workspace...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Welcome back, {user.user_metadata.first_name || 'there'}!
          </h1>
          <p className="text-grey text-lg">Your business team is ready to help you succeed</p>
        </div>

        {businesses.length > 0 && (
          <BusinessSwitcher 
            businesses={businesses}
            currentBusiness={currentBusiness}
            onSelect={handleBusinessSelect}
            onNewBusiness={handleStartNewBusiness}
            maxBusinesses={5}
          />
        )}

        {generating ? (
          <LoadingState firstName={user.user_metadata.first_name || 'there'} />
        ) : showForm || !currentBusiness ? (
          <BusinessForm 
            user={user}
            onBusinessCreated={handleBusinessCreated}
            onGenerationStart={handleGenerationStart}
          />
        ) : currentBusiness?.results ? (
          <Results 
            business={currentBusiness}
            user={user}
            onUpdate={handleGenerationComplete}
          />
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-grey text-lg mb-4">
              This business hasn't been launched yet.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-teal hover:bg-teal/90 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Launch This Business
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
