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
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Want a Lower Car Payment?</h1>

      <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-xl">
        Refinance your high-interest auto loan with ease and keep more money in your pocket.
      </p>

      <div className="text-left text-gray-600 max-w-xl space-y-2 mb-8">
        <p>✅ Pay less interest on your car loan 💸</p>
        <p>✅ Improve your financial health 💪</p>
        <p>✅ Earn rewards for on-time payments 🎁</p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left max-w-xl mb-8 shadow-sm">
        <h2 className="text-lg font-semibold mb-2">How it works 🚗</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>🔗 Connect your data and automatically apply</li>
          <li>💳 Use your virtual card to pay off your old loan</li>
          <li>🎉 Make repayments on your new loan and earn rewards</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left max-w-xl mb-8 rounded-md shadow-sm">
        <p className="italic text-gray-800">“I couldn’t believe how fast it was to refinance. I paid off my high-rate loan using the virtual card, and my credit union gave me a much better rate. Earning rewards for paying back? That’s a win-win.”</p>
        <p className="mt-2 text-sm text-blue-800 font-semibold">– Debbie Stone., ABCU Member</p>
      </div>

      <Link
        to="/application"
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
      >
        Start Application
      </Link>

      <p className="mt-6 text-sm text-gray-500">In partnership with your trusted Credit Union 🏦</p>
    </div>
  );
}

// 📱 Consent Screen
function ConsentScreen() {
  const [consentGiven, setConsentGiven] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (consentGiven) {
      navigate("/loading");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Consent to Share Data</h1>
      <p className="text-gray-600 max-w-md mb-6">
        By continuing, you agree to share your past debt repayment and savings data with our trusted credit union partner to explore refinance options.
      </p>
      
      <label className="flex items-center gap-2 text-sm text-gray-700 mb-4">
        <input
          type="checkbox"
          checked={consentGiven}
          onChange={(e) => setConsentGiven(e.target.checked)}
          className="accent-blue-600"
        />
        I agree to share my data
      </label>

      <button
        onClick={handleContinue}
        disabled={!consentGiven}
        className={`px-6 py-3 rounded-md text-white text-sm font-medium ${
          consentGiven ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Continue
      </button>

      <p className="mt-6 text-sm text-blue-600 underline cursor-pointer">
        Learn how we use your data
      </p>
    </div>
  );
}

// ⏳ Loading Screen (stub)
import { useEffect } from "react";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/status");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">We're processing your application</h1>
      <p className="text-gray-600 mb-10 text-lg max-w-md">
        Hang tight! We're gathering your data and your credit union is making a decision.
      </p>
      <div className="relative w-full max-w-lg h-32">
        <div className="absolute animate-car1 text-4xl transform -scale-x-100">🚗</div>
        <div className="absolute animate-car2 text-4xl transform -scale-x-100">🚙</div>
        <div className="absolute animate-car3 text-4xl transform -scale-x-100">🚕</div>
      </div>
      <style>
        {`
          @keyframes car1 {
            0% { left: 110%; top: 0; }
            50% { left: 50%; top: 5%; }
            100% { left: -10%; top: 0; }
          }
          @keyframes car2 {
            0% { left: 110%; top: 40%; }
            30% { left: 65%; top: 42%; }
            80% { left: 10%; top: 35%; }
            100% { left: -10%; top: 40%; }
          }
          @keyframes car3 {
            0% { left: 110%; top: 70%; }
            60% { left: 30%; top: 65%; }
            100% { left: -10%; top: 70%; }
          }
          .animate-car1 {
            animation: car1 3s ease-in-out forwards;
          }
          .animate-car2 {
            animation: car2 3s ease-in-out forwards;
          }
          .animate-car3 {
            animation: car3 3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
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
  const [copiedField, setCopiedField] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [cardUnlocked, setCardUnlocked] = useState(false);

  const cardData = {
    number: "1234 5678 9012 3456",
    expiry: "12/27",
    cvv: "123",
    name: "Keith Stone",
    balance: "$12,500.00",
    rate: "5.49%",
    term: "60 months",
    estMonthly: "$238.45"
  };

  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg text-center space-y-6 border border-white/50">
        <h2 className="text-3xl font-bold text-gray-900">Your Refinance Offer</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-left text-gray-700">
          <p><strong>Balance:</strong> {cardData.balance}</p>
          <p><strong>Rate:</strong> {cardData.rate}</p>
          <p><strong>Term:</strong> {cardData.term}</p>
          <p><strong>Monthly:</strong> {cardData.estMonthly}</p>
        </div>

        {!termsAccepted && (
          <button
            onClick={() => setTermsAccepted(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Accept Loan Terms
          </button>
        )}

        {termsAccepted && !cardUnlocked && (
          <button
            onClick={() => setCardUnlocked(true)}
            className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition"
          >
            Unlock Card
          </button>
        )}

        {cardUnlocked && (
          <>
            <div className="bg-gradient-to-br from-blue-800 to-indigo-700 text-white rounded-xl p-6 shadow-lg relative">
              <div className="text-sm">AutoRefinance</div>
              <div className="text-xl font-mono tracking-widest my-4">{cardData.number}</div>

              <div className="flex justify-between text-xs mb-4">
                <div>
                  <div className="uppercase text-gray-300 text-[10px]">Cardholder</div>
                  <div className="font-medium text-sm">{cardData.name}</div>
                </div>
                <div>
                  <div className="uppercase text-gray-300 text-[10px]">Exp</div>
                  <div className="font-medium text-sm">{cardData.expiry}</div>
                </div>
                <div>
                  <div className="uppercase text-gray-300 text-[10px]">CVV</div>
                  <div className="font-medium text-sm">{cardData.cvv}</div>
                </div>
              </div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                className="w-10 absolute bottom-4 right-4"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 mt-6 text-sm">
              {["number", "expiry", "cvv"].map((field) => (
                <button
                  key={field}
                  onClick={() => handleCopy(field, cardData[field])}
                  className="border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  {copiedField === field ? "Copied!" : `Copy ${field.toUpperCase()}`}
                </button>
              ))}
              <button
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => alert("Card pushed to Apple Wallet / Google Pay")}
              >
                Add to Apple Wallet / Google Pay
              </button>
            </div>
          </>
        )}
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
