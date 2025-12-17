import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ResultsPage from "./components/results/ResultsPage";
import Pricing from "./pages/Pricing"; // ✅ REAL pricing page

// --- 1. Navigation Menu Component ---
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
        <Link to="/" className="hover:text-teal-600 font-medium text-gray-700">Home</Link>
        <Link to="/about" className="hover:text-teal-600 font-medium text-gray-700">About</Link>
        <Link to="/pricing" className="hover:text-teal-600 font-medium text-gray-700">Pricing</Link>
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

// --- 2. Page Layout ---
function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
}

// --- 3. Home Page ---
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
