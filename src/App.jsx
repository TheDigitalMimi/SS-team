import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import ResultsPage from "./components/results/ResultsPage";
import Pricing from "./pages/Pricing";
import BusinessHub from "./pages/BusinessHub";

/* ===============================
   NAVBAR
================================ */

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
        <Link to="/" className="hover:text-teal-600 font-medium">Home</Link>
        <Link to="/pricing" className="hover:text-teal-600 font-medium">Pricing</Link>
        <Link to="/hub" className="hover:text-teal-600 font-medium">My Business</Link>
      </div>

      <Link
        to="/start"
        className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold"
      >
        Start Free
      </Link>
    </nav>
  );
}

/* ===============================
   LAYOUT
================================ */

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
}

/* ===============================
   LANDING PAGE (PUBLIC)
================================ */

function Landing() {
  return (
    <section className="bg-[#0f172a] text-white py-28 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-extrabold mb-6">
          Your Business.<br />
          <span className="text-teal-400">Solved.</span>
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          Everything agencies charge thousands for — in one system.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/start"
            className="bg-teal-500 text-black px-8 py-4 rounded-lg font-bold text-lg"
          >
            Start Free
          </Link>

          <Link
            to="/pricing"
            className="border border-teal-400 px-8 py-4 rounded-lg font-bold text-lg"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   START FREE
================================ */

function StartFree() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Free Preview</h2>
        <p className="text-gray-500 mb-6">
          You’ll see a limited version before unlocking everything.
        </p>

        <Link
          to="/dashboard"
          className="bg-teal-600 text-white px-6 py-4 rounded-lg font-bold"
        >
          Enter Preview
        </Link>
      </div>
    </div>
  );
}

/* ===============================
   APP
================================ */

export default function App() {
  const [businesses] = useState([
    { id: "starter", name: "Preview Business", core: {}, growth: {} }
  ]);

  const [activeBusinessId, setActiveBusinessId] = useState("starter");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/start" element={<StartFree />} />
          <Route path="/hub" element={<BusinessHub />} />
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
