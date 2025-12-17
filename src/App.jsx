import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ResultsPage from "./components/results/ResultsPage";
import Pricing from "./pages/Pricing";

/* ===============================
   STARTER / PREVIEW BUSINESS DATA
   =============================== */

const starterBusiness = {
  id: "starter",
  name: "Your First Business (Preview)",
  isStarter: true,
  locked: true,
  core: {
    businessPlan:
      "This is a preview of your personalized business plan. Subscribe to unlock the full version.",
    swotAnalysis:
      "Preview SWOT analysis. Full strengths, weaknesses, opportunities, and threats unlock with full access.",
    branding:
      "Preview branding direction. Full brand voice, colors, and naming unlock after subscribing.",
    marketingStrategy:
      "Preview marketing outline. Full platform-by-platform strategy is locked.",
    financialProjections:
      "Preview only. Unlock full financial projections with paid access.",
  },
  growth: {
    contentCalendar:
      "Preview 7-day content calendar. Full 30-day calendar unlocks after subscribing.",
  },
};

/* ===============================
   NAVIGATION
   =============================== */

function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <div className="font-bold text-xl text-teal-700 flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center text-white font-bold">
          S
        </div>
        SolvedSuite
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-teal-600 font-medium text-gray-700">
          Home
        </Link>
        <Link to="/about" className="hover:text-teal-600 font-medium text-gray-700">
          About
        </Link>
        <Link to="/pricing" className="hover:text-teal-600 font-medium text-gray-700">
          Pricing
        </Link>
      </div>

      <Link
        to="/start"
        className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 font-semibold transition shadow-md"
      >
        Try Free
      </Link>
    </nav>
  );
}

/* ===============================
   LAYOUT
   =============================== */

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
}

/* ===============================
   HOME
   =============================== */

function Home() {
  return (
    <div className="flex flex-col font-sans">
      <section className="bg-[#0f172a] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#1e293b] text-teal-400 px-4 py-1 rounded-full text-sm font-semibold mb-8 border border-teal-900">
            SolvedSuite Business Hub — The Only Team You Need to Build Your Business
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Launch your vision — <br />
            <span className="text-teal-400">not your budget.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            SolvedSuite gives you everything agencies charge thousands for —
            <strong className="text-white">
              {" "}strategy, content, branding, ads, and a full business plan
            </strong>.
          </p>

          <Link
            to="/start"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-900 px-8 py-4 rounded-lg text-xl font-bold transition transform hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.5)]"
          >
            Start Building Now
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            No credit card required to start.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ===============================
   ABOUT
   =============================== */

function About() {
  return (
    <div className="p-20 text-center text-2xl font-bold">
      About SolvedSuite Page
    </div>
  );
}

/* ===============================
   START FREE
   =============================== */

function GeneratorStart() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Let's Build Your Business
          </h2>
          <p className="text-gray-500">
            Tell us a little about your vision to get started.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="block text-center w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition"
        >
          Generate My Plan
        </Link>
      </div>
    </div>
  );
}

/* ===============================
   APP (THIS IS THE KEY PART)
   =============================== */

export default function App() {
  const [businesses, setBusinesses] = useState([starterBusiness]);
  const [activeBusinessId, setActiveBusinessId] = useState("starter");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/start" element={<GeneratorStart />} />
        </Route>

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
