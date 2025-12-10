export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} SolvedSuite. Your business. Solved.
        </p>
      </div>
    </footer>
  );
}
