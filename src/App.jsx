import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase, getCurrentUser } from './services/supabase';

import Home from './pages/Home';
import BusinessHub from './pages/BusinessHub';
import Dashboard from './pages/Dashboard';
import Auth from './components/auth/Auth';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-navy text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header user={user} />

        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Business Hub (cards / overview page) */}
            <Route path="/business-hub" element={<BusinessHub />} />

            {/* Auth */}
            <Route
              path="/auth"
              element={user ? <Navigate to="/dashboard" /> : <Auth />}
            />

            {/* Dashboard = SolvedSuite Business Hub (logged in) */}
            <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/auth" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
