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
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-gray-200 text-center gap-4 md:gap-0">
      <div className="text-2xl font-semibold">AutoRefinance</div>
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/application" className="hover:text-blue-600">Application</Link>
        <Link to="/status" className="hover:text-blue-600">Status</Link>
        <Link to="/card" className="hover:text-blue-600">Virtual Card</Link>
        <Link to="/transactions" className="hover:text-blue-600">Transactions</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-center text-xs text-gray-500 py-8 border-t border-gray-200">
      <div className="mb-2">© 2025 AutoRefinance. All rights reserved.</div>
      <div>
        <a href="#" className="hover:underline">Privacy Policy</a> ・ <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Refinance Your Auto Loan. Effortlessly.</h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        A smarter way to lower your interest, gain flexibility, and take control of your financial future — all with a secure, seamless experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <Feature icon="🔽" title="Lower Interest Rates" desc="Get competitive rates that help reduce your monthly payments." />
        <Feature icon="📆" title="Flexible Terms" desc="Select a plan that aligns with your life and goals — not the other way around." />
        <Feature icon="🔒" title="End-to-End Security" desc="Your information is protected with industry-grade encryption and transparent processes." />
      </div>

      <button onClick={() => navigate("/application")} className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition block mx-auto">
        Start Your Application
      </button>
    </main>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="text-3xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ConsentScreen() {
  const navigate = useNavigate();
  const handleConsentAgree = () => {
    navigate("/loading");
    setTimeout(() => navigate("/status"), 3000);
  };

  return (
    <main className="flex items-center justify-center px-6 py-24">
      <div className="bg-white border border-gray-200 rounded-xl p-10 max-w-xl w-full text-center shadow-md">
        <h2 className="text-2xl font-bold mb-4">Connect Your Data</h2>
        <p className="text-sm text-gray-700 mb-4">To streamline your application, we’ll securely connect your profile from Debbie.</p>
        <p className="text-sm text-gray-600 font-medium mb-6">By clicking “Agree and Continue,” you consent to share your data to improve your refinance offer.</p>
        <button onClick={handleConsentAgree} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Agree and Continue
        </button>
      </div>
    </main>
  );
}

function LoadingScreen() {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50 mb-6"></div>
      <h2 className="text-2xl font-semibold mb-2">Analyzing Your Loan Application...</h2>
      <p className="text-sm text-gray-600">Hang tight! We're checking your data to find the best offer available for you.</p>
    </main>
  );
}

function StatusScreen() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center px-6 py-24 relative">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="bg-blue-50 rounded-xl p-10 max-w-xl w-full text-center shadow-md z-10">
        <h2 className="text-2xl font-bold mb-4">Application Status</h2>
        <p className="text-lg font-medium text-gray-800 mb-2">Congratulations, your application has been <span className="text-green-600 font-semibold">Approved!</span></p>
        <p className="text-sm text-gray-600 mb-6">Please follow the next steps to complete your process:</p>
        <ul className="text-sm text-gray-700 space-y-2 text-left list-disc list-inside mb-6">
          <li>Review and sign the contract document.</li>
          <li>Upload any additional required documents.</li>
          <li>Schedule a call with our representative for further assistance.</li>
          <li>Access your virtual card through the app for immediate use.</li>
        </ul>
        <button onClick={() => navigate("/card")} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Access Your Card
        </button>
      </div>
    </main>
  );
}

function VirtualCard() {
  const [copied, setCopied] = useState(false);
  const handleCopyCard = () => {
    navigator.clipboard.writeText("4111 1111 1111 3821").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const handleAddToWallet = () => {
    alert("This card will be added to your Apple Pay or Google Pay wallet.");
  };
  return (
    <main className="flex items-center justify-center px-4 py-16">
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 max-w-xl w-full text-center shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Virtual Card</h2>
        <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-white px-4 sm:px-6 py-4 sm:py-5 shadow-lg">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="uppercase tracking-wide">AutoRefinance</span>
            <span className="text-right">Virtual</span>
          </div>
          <div className="text-lg sm:text-xl font-mono tracking-widest mt-6">4111 1111 1111 3821</div>
          <div className="flex justify-between items-center mt-6 text-xs">
            <div>
              <div className="opacity-60">VALID THRU</div>
              <div>12/27</div>
            </div>
            <div className="text-right">
              <div className="opacity-60">CARDHOLDER</div>
              <div>JANE DOE</div>
            </div>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard logo"
            className="absolute bottom-3 right-4 w-12 h-auto"
          />
          <div className="absolute bottom-3 left-4 text-xs italic opacity-60">Only for Auto Dealer Use</div>
        </div>

        <p className="text-sm text-gray-700 mt-6 mb-4">
          Use this virtual card to pay off your existing auto loan. Share it with your creditor or auto dealer.
        </p>
        <p className="text-sm text-gray-600 font-medium mb-6">
          <strong>Important:</strong> This card only works at verified auto dealers and cannot be used for cash withdrawals or general purchases.
        </p>
        <div className="flex flex-col gap-3 items-center">
          <button onClick={handleAddToWallet} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Add to Apple / Google Wallet
          </button>
          <button onClick={handleCopyCard} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition">
            {copied ? "Card Number Copied!" : "Copy Card Number"}
          </button>
        </div>
      </div>
    </main>
  );
}

function TransactionHistory() {
  const transactions = [
    { id: 1, description: "Original Auto Loan Payoff", date: "2025-04-03", amount: -8500, reward: 85 },
    { id: 2, description: "Monthly Payment - May", date: "2025-05-03", amount: -300, reward: 3 },
    { id: 3, description: "Monthly Payment - June", date: "2025-06-03", amount: -300, reward: 3 }
  ];

  return (
    <main className="px-4 sm:px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Description</th>
              <th className="px-4 py-2 text-right text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-4 py-2 text-right text-sm font-semibold text-gray-600">Reward</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t border-gray-100">
                <td className="px-4 py-3 text-sm text-gray-700">{txn.date}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{txn.description}</td>
                <td className="px-4 py-3 text-sm text-right text-gray-900 font-mono">${txn.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-sm text-right text-green-600 font-semibold">+${txn.reward.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
