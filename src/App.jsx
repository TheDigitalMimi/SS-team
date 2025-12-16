import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ResultsPage from "./components/results/ResultsPage";

// --- 1. Navigation Menu Component ---
function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="font-bold text-xl text-teal-700 flex items-center gap-2">
        {/* Simple Icon Logo */}
        <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center text-white font-bold">S</div>
        SolvedSuite
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-teal-600 font-medium text-gray-700">Home</Link>
        <Link to="/about" className="hover:text-teal-600 font-medium text-gray-700">About</Link>
        <Link to="/pricing" className="hover:text-teal-600 font-medium text-gray-700">Pricing</Link>
      </div>
      <div>
        <Link 
          to="/start" 
          className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 font-semibold transition shadow-md"
        >
          Try Free
        </Link>
      </div>
    </nav>
  );
}

// --- 2. Page Layout (Adds Navbar to every page) ---
function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
}

// --- 3. Home Page (Matches your "Launch your Vision" screenshot) ---
function Home() {
  return (
    <div className="flex flex-col font-sans">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0f172a] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline Pill */}
          <div className="inline-block bg-[#1e293b] text-teal-400 px-4 py-1 rounded-full text-sm font-semibold mb-8 border border-teal-900">
             SolvedSuite Business Hub — The Only Team You Need to Build Your Business
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Launch your vision — <br />
            <span className="text-teal-400">not your budget.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            SolvedSuite gives you everything agencies charge thousands for—
            <strong className="text-white"> strategy, content, branding, ads, and a full business plan</strong>
            —built instantly from your idea. It’s the team you need, without the price you hate.
          </p>

          {/* CTA Button */}
          <Link 
            to="/start" 
            className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-900 px-8 py-4 rounded-lg text-xl font-bold transition transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.5)]"
          >
            Start Building Now
          </Link>
          <p className="mt-4 text-sm text-gray-500">No credit card required to start.</p>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="bg-[#1e293b] py-20 px-6 text-white border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-400 font-bold tracking-widest text-sm mb-2 uppercase">Simple Process</p>
          <h2 className="text-4xl font-bold mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Your Account", desc: "Sign up free and tell us your name and location" },
              { step: "2", title: "Share Your Idea", desc: "Describe your business concept in your own words" },
              { step: "3", title: "Meet Your Team", desc: "Receive personalized plans, branding, and strategies within minutes" },
              { step: "4", title: "Grow & Refresh", desc: "Get updated content, ads, and calendars as your business evolves" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500 transition group">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-teal-500 text-slate-900 font-bold rounded-full flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-bold tracking-widest text-sm mb-2 uppercase">Everything You Need</p>
            <h2 className="text-4xl font-extrabold text-slate-900">Your Complete Business Team</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              What would cost thousands from consultants, delivered instantly — personalized to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Business Plan", desc: "Complete roadmap tailored to your unique idea and market." },
              { title: "SWOT Analysis", desc: "Understand your strengths, weaknesses, opportunities & threats." },
              { title: "Branding Suite", desc: "Brand voice, fonts, colors, taglines & name suggestions." },
              { title: "Social Media Strategy", desc: "Platform-specific plans for TikTok, Instagram, Pinterest & more." },
              { title: "Ad Creative", desc: "3 custom images with copy, CTAs & text overlays." },
              { title: "SEO & Keywords", desc: "Research-backed keywords to rank and get found." },
              { title: "Customer Targeting", desc: "Know exactly who to reach and where to find them." },
              { title: "Product Sourcing", desc: "Suppliers, wholesalers & complementary product ideas." },
              { title: "Financial Projections", desc: "Revenue forecasts and financial planning." },
              { title: "Marketing Strategy", desc: "Comprehensive plan to grow your audience." },
              { title: "Competitor Analysis", desc: "Know your competition inside and out." },
              { title: "30-Day Content Calendar", desc: "Ready-to-post content schedule." },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition duration-300 border border-transparent hover:border-teal-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Simple */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center border-t border-slate-800">
        <p>&copy; 2025 SolvedSuite. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- 4. Placeholder Pages ---
function About() {
  return <div className="p-20 text-center text-2xl font-bold">About SolvedSuite Page</div>;
}

function Pricing() {
  return <div className="p-20 text-center text-2xl font-bold">Pricing Options (Subscriptions)</div>;
}

// --- 5. The "Try Free" Input Page ---
function GeneratorStart() {
  const [idea, setIdea] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Let's Build Your Business</h2>
            <p className="text-gray-500">Tell us a little about your vision to get started.</p>
        </div>
        
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="e.g. Jane Doe" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition" />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="e.g. Bennettsville, SC" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition" />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Idea</label>
                <textarea 
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="I want to start a mobile coffee cart..." 
                    className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-teal-500 outline-none transition resize-none"
                ></textarea>
            </div>
            
            <Link 
                to="/dashboard" 
                className="block text-center w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Generate My Plan
            </Link>
        </div>
      </div>
    </div>
  );
}

// --- 6. Main App Component (Logic & Routing) ---
export default function App() {
  // Logic to store business data
  const [businesses] = useState([
    {
      id: "biz-1",
      name: "SolvedSuite Demo Business",
      core: {
        businessPlan: "This is a full business plan created by SolvedSuite...",
        swotAnalysis: "Strengths: Clear value proposition...",
        keywordResearch: { primary: ["business"], secondary: [], longTail: [], local: [] },
        targetCustomers: "Entrepreneurs...",
        branding: "Tone: Professional...",
        competitorAnalysis: "Competitors include...",
        financialProjections: "Estimated revenue..."
      },
      growth: {
        adSets: [],
        contentCalendar: "Week 1: Introduction..."
      }
    }
  ]);

  const [activeBusinessId, setActiveBusinessId] = useState(businesses[0].id);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/start" element={<GeneratorStart />} />
        </Route>

        {/* Private Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={
            <ResultsPage
              businesses={businesses}
              activeBusinessId={activeBusinessId}
              setActiveBusinessId={setActiveBusinessId}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
