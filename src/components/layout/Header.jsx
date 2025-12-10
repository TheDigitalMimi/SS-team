import { Link } from 'react-router-dom';
import { signOut } from '../../services/supabase';

export default function Header({ user }) {
  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <header className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-teal">
            SolvedSuite
          </Link>
          
          <nav className="flex items-center gap-6">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-teal transition">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-teal hover:bg-teal/90 px-4 py-2 rounded transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-teal hover:bg-teal/90 px-6 py-2 rounded font-semibold transition"
              >
                Get Started
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
