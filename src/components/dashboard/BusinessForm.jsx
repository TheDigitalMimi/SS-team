import { useState } from 'react';
import { createBusiness, updateBusinessResults } from '../../services/supabase';
import { generateBusinessStrategy } from '../../services/ai';

export default function BusinessForm({ user, onBusinessCreated, onGenerationStart }) {
  const [formData, setFormData] = useState({
    firstName: user.user_metadata.first_name || '',
    businessName: '',
    businessType: '',
    location: '',
    businessIdea: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }
    if ((formData.businessType === 'physical' || formData.businessType === 'both') && !formData.location.trim()) {
      newErrors.location = 'Location is required for physical businesses';
    }
    if (!formData.businessIdea.trim()) {
      newErrors.businessIdea = 'Please describe your business idea';
    } else if (formData.businessIdea.trim().length < 50) {
      newErrors.businessIdea = 'Please provide more detail (at least 50 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    onGenerationStart();

    const { data: businessData, error: businessError } = await createBusiness(user.id, {
      name: formData.businessName,
      type: formData.businessType,
      location: formData.location || null,
      description: formData.businessIdea,
    });

    if (businessError) {
      alert('Error creating business. Please try again.');
      return;
    }

    const result = await generateBusinessStrategy(
      formData.firstName,
      formData.businessType,
      formData.location,
      formData.businessIdea
    );

    if (result.success) {
      const { data: updatedBusiness } = await updateBusinessResults(
        businessData[0].id,
        result.content
      );
      onBusinessCreated(updatedBusiness[0]);
    } else {
      alert(result.error || 'Failed to generate strategy. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-navy mb-6">Launch Your Business</h2>
      <p className="text-grey mb-8">
        Tell us about your business idea, and your team will create a complete strategy to help you succeed
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-navy font-semibold mb-2">Your First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            className="w-full px-4 py-3 border-2 border-grey/30 rounded-lg focus:outline-none focus:border-teal"
            placeholder="Your name"
          />
          {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-navy font-semibold mb-2">Business Name</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
            className="w-full px-4 py-3 border-2 border-grey/30 rounded-lg focus:outline-none focus:border-teal"
            placeholder="What do you want to call your business?"
          />
          {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
        </div>

        <div>
          <label className="block text-navy font-semibold mb-2">Business Type</label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setFormData({...formData, businessType: 'online'})}
              className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                formData.businessType === 'online'
                  ? 'border-teal bg-teal/10 text-teal'
                  : 'border-grey/30 text-grey hover:border-teal'
              }`}
            >
              Online Only
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, businessType: 'physical'})}
              className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                formData.businessType === 'physical'
                  ? 'border-teal bg-teal/10 text-teal'
                  : 'border-grey/30 text-grey hover:border-teal'
              }`}
            >
              Physical Location
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, businessType: 'both'})}
              className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                formData.businessType === 'both'
                  ? 'border-teal bg-teal/10 text-teal'
                  : 'border-grey/30 text-grey hover:border-teal'
              }`}
            >
              Both
            </button>
          </div>
          {errors.businessType && <p className="text-red-600 text-sm mt-1">{errors.businessType}</p>}
        </div>

        {(formData.businessType === 'physical' || formData.businessType === 'both') && (
          <div>
            <label className="block text-navy font-semibold mb-2">Business Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full px-4 py-3 border-2 border-grey/30 rounded-lg focus:outline-none focus:border-teal"
              placeholder="City, State (e.g., Nashville, TN)"
            />
            {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
          </div>
        )}

        <div>
          <label className="block text-navy font-semibold mb-2">Tell Us About Your Business Idea</label>
          <p className="text-sm text-grey mb-2">
            The more detail you provide, the better your team can help. Share your vision, target customers, what makes you unique, etc.
          </p>
          <textarea
            value={formData.businessIdea}
            onChange={(e) => setFormData({...formData, businessIdea: e.target.value})}
            rows={8}
            className="w-full px-4 py-3 border-2 border-grey/30 rounded-lg focus:outline-none focus:border-teal"
            placeholder="Example: I want to create handmade candles using natural soy wax and essential oils. My target customers are women aged 25-45 who value eco-friendly, luxury home products. I'll sell online through my own website and Etsy, and eventually at local farmers markets..."
          />
          <p className="text-sm text-grey mt-1">
            {formData.businessIdea.length} characters (minimum 50)
          </p>
          {errors.businessIdea && <p className="text-red-600 text-sm mt-1">{errors.businessIdea}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-4 rounded-lg transition text-lg"
        >
          Send to My Team
        </button>
      </form>
    </div>
  );
}
