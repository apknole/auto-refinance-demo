import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function AutoRefinanceHome() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/application" element={<ConsentScreen />} />
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/status" element={<StatusScreen />} />
          <Route path="/card" element={<VirtualCard />} />
          <Route path="/transactions" element={<TransactionHistory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center justify-between p-6 md:px-8">
        <div className="text-2xl font-semibold">AutoRefinance</div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">
          ☰
        </button>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/application" className="hover:text-blue-600">Application</Link>
          <Link to="/status" className="hover:text-blue-600">Status</Link>
          <Link to="/card" className="hover:text-blue-600">Virtual Card</Link>
          <Link to="/transactions" className="hover:text-blue-600">Transactions</Link>
        </nav>
      </div>
      {menuOpen && (
        <nav className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/application" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Application</Link>
          <Link to="/status" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Status</Link>
          <Link to="/card" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Virtual Card</Link>
          <Link to="/transactions" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Transactions</Link>
        </nav>
      )}
    </header>
  );
}

// The rest of the code remains the same
// VirtualCard layout adjusted for better mobile padding
// No changes to Footer, HomeScreen, ConsentScreen, LoadingScreen, StatusScreen, TransactionHistory

// Just update the card container styles in VirtualCard:
// Replace this line:
// <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 max-w-xl w-full text-center shadow-md">
// With this:
// <div className="bg-white border border-gray-200 rounded-xl px-4 py-6 sm:px-6 sm:py-8 max-w-xl w-full text-center shadow-md">

// This reduces excessive padding and makes it more mobile-friendly
