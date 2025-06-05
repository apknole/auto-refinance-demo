import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

// 🔁 Main App
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

// 📱 Responsive Header
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center justify-between p-6 md:px-8">
        <div className="text-2xl font-semibold">AutoRefinance</div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">☰</button>
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/application" onClick={() => setMenuOpen(false)}>Application</Link>
          <Link to="/status" onClick={() => setMenuOpen(false)}>Status</Link>
          <Link to="/card" onClick={() => setMenuOpen(false)}>Virtual Card</Link>
          <Link to="/transactions" onClick={() => setMenuOpen(false)}>Transactions</Link>
        </nav>
      )}
    </header>
  );
}

// 🏠 Home Screen
function HomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Lower Your Car Payment. In Minutes.</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
        Secure a better auto loan and get rewarded every time you repay.
      </p>
      <Link to="/application" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
        Start Application
      </Link>
    </div>
  );
}

// ✅ Consent Screen (stub)
function ConsentScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-4 py-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Consent to Connect Your Auto Loan</h2>
      <p className="text-gray-600 mb-6 max-w-lg">We’ll find your existing auto loan to help you refinance it instantly.</p>
      <button onClick={() => navigate("/loading")} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        Connect Account
      </button>
    </div>
  );
}

// ⏳ Loading Screen (stub)
function LoadingScreen() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/status"), 2000);
  return (
    <div className="flex items-center justify-center min-h-screen text-lg font-medium">Checking your loan details...</div>
  );
}

// 🎉 Approval Screen
function StatusScreen() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center text-center px-4 py-20">
      <Confetti />
      <h2 className="text-3xl font-bold mb-4">You’re Approved!</h2>
      <p className="text-gray-600 mb-6 max-w-lg">Your new loan is ready. Let’s help you pay off the old one.</p>
      <button onClick={() => navigate("/card")} className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
        Access Your Card
      </button>
    </div>
  );
}

// 💳 Virtual Card Screen
function VirtualCard() {
  return (
    <div className="flex flex-col items-center px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Your Virtual Card</h2>
      <p className="text-gray-600 mb-6 max-w-md">Use this card to pay off your existing loan. It works only with verified auto dealers.</p>
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl px-6 py-8 w-full max-w-sm shadow-lg mb-6">
        <div className="text-left text-sm">AutoRefinance</div>
        <div className="text-xl font-mono mt-4 tracking-widest">4111 1111 1111 1234</div>
        <div className="flex justify-between mt-4 text-sm">
          <div>12/27</div>
          <div>CVV: 123</div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6 mt-4 ml-auto" />
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-black text-white px-4 py-2 rounded-md">Add to Apple Wallet</button>
        <button className="bg-black text-white px-4 py-2 rounded-md">Add to Google Wallet</button>
        <button
          onClick={() => navigator.clipboard.writeText("4111111111111234")}
          className="text-sm text-blue-600 underline mt-2"
        >
          Copy Card Number
        </button>
      </div>
    </div>
  );
}

// 📜 Transactions + Rewards
function TransactionHistory() {
  const transactions = [
    { id: 1, merchant: "Chase Auto Loan", amount: "$6,500", reward: "$20", date: "2024-12-01" },
    { id: 2, merchant: "Capital One Auto Finance", amount: "$4,200", reward: "$15", date: "2025-01-10" },
  ];

  return (
    <div className="px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-6">Transaction History</h2>
      <div className="max-w-xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Merchant</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Reward</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(txn => (
              <tr key={txn.id} className="border-t">
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.merchant}</td>
                <td className="px-4 py-2">{txn.amount}</td>
                <td className="px-4 py-2">{txn.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ⚙️ Footer
function Footer() {
  return (
    <footer className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} AutoRefinance, Inc.
    </footer>
  );
}
