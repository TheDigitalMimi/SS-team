import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ResultsPage from "./components/results/ResultsPage";

// --- 1. Navigation Menu Component ---
function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between items-center bg-white shadow-sm">
      <div className="font-bold text-xl text-teal-700">SolvedSuite</div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-teal-600 font-medium">Home</Link>
        <Link to="/about" className="hover:text-teal-600 font-medium">About</Link>
        <Link to="/pricing" className="hover:text-teal-600 font-medium">Pricing</Link>
      </div>
      <div>
        <Link 
          to="/start" 
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 font-semibold transition"
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

// --- 3. Public Pages ---
function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800">Your Business. Solved.</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Generate a comprehensive business plan, marketing strategy, and ad creatives in seconds using AI.
      </p>
      <Link to="/start" className="bg-teal-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-teal-700 shadow-lg transition">
        Start Your Free Trial
      </Link>
    </div>
  );
}

function About() {
  return <div className="p-10 text-center text-2xl">About SolvedSuite</div>;
}

function Pricing() {
  return <div className="p-10 text-center text-2xl">Pricing Plans</div>;
}

// --- 4. The "Try Free" Input Page ---
function GeneratorStart() {
  const [idea, setIdea] = useState("");

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Tell us about your idea</h2>
      <div className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" placeholder="e.g. Jane Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input type="text" placeholder="e.g. Bennettsville, SC" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Idea</label>
            <textarea 
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Describe what you want to build..." 
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-teal-500 outline-none"
            ></textarea>
        </div>
        
        <Link 
            to="/dashboard" 
            className="block text-center w-full bg-teal-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-teal-700 transition"
        >
          Generate My Plan
        </Link>
      </div>
    </div>
  );
}

// --- 5. Main App Component ---
export default function App() {
  // Your existing state logic stays here
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
