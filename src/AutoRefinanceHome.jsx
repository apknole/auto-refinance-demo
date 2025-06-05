import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function AutoRefinanceHome() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/status" element={<Status />} />
          <Route path="/card" element={<VirtualCard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="border-b border-gray-200">
      <div className="flex justify-between items-center p-6 md:px-8">
        <div className="text-xl font-semibold">AutoRefinance</div>
        <button onClick={toggleMenu} className="md:hidden">☰</button>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLinks />
        </nav>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4">
          <NavLinks onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}

function NavLinks({ onClick = () => {} }) {
  return (
    <>
      <Link to="/" onClick={onClick}>Home</Link>
      <Link to="/application" onClick={onClick}>Application</Link>
      <Link to="/status" onClick={onClick}>Status</Link>
      <Link to="/card" onClick={onClick}>Virtual Card</Link>
      <Link to="/transactions" onClick={onClick}>Transactions</Link>
    </>
  );
}

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Lower Your Car Payment. In Minutes.</h1>
      <p className="text-gray-600 mb-8 max-w-xl text-lg">
        Refinance your auto loan with ease and earn rewards with every payment.
      </p>
      <Link
        to="/application"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md"
      >
        Start Application
      </Link>
    </section>
  );
}

function Application() {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Share Your Info</h2>
      <p className="mb-6 text-gray-600">Connect with our data partner to retrieve your auto loan details securely.</p>
      <button
        onClick={() => navigate("/loading")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
      >
        Connect & Continue
      </button>
    </div>
  );
}

function Loading() {
  const navigate = useNavigate();
  useState(() => {
    setTimeout(() => navigate("/status"), 2500);
  }, []);
  return (
    <div className="p-10 text-center text-lg text-gray-700">Processing your application...</div>
  );
}

function Status() {
  return (
    <div className="p-10 text-center">
      <Confetti />
      <h2 className="text-3xl font-bold text-green-600 mb-4">You're Approved!</h2>
      <p className="mb-6 text-gray-600">Access your virtual card and pay off your current loan.</p>
      <Link to="/card" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
        Access Your Card
      </Link>
    </div>
  );
}

function VirtualCard() {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-full max-w-sm p-6 rounded-xl mb-6 shadow-lg">
        <div className="text-left text-sm">Auto Refinance Card</div>
        <div className="text-xl tracking-widest mt-6 mb-4">•••• •••• •••• 1234</div>
        <div className="flex justify-between text-sm">
          <div>12/27</div>
          <div>123</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm max-w-xs">
        This virtual card can only be used to pay off your existing auto loan through a verified dealership.
      </p>
      <button className="mb-2 text-blue-600 underline text-sm">Add to Apple/Google Wallet</button>
      <button className="text-sm border border-blue-600 px-4 py-1 rounded-md text-blue-600">Copy Card Details</button>
    </div>
  );
}

function Transactions() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Transaction History</h2>
      <ul className="space-y-4 max-w-md mx-auto">
        <li className="border-b pb-2">
          <div className="flex justify-between">
            <span>Original Loan Payoff</span>
            <span>$10,200</span>
          </div>
          <div className="text-sm text-green-600">+ $25 reward</div>
        </li>
        <li className="border-b pb-2">
          <div className="flex justify-between">
            <span>Repayment - Month 1</span>
            <span>$425</span>
          </div>
          <div className="text-sm text-green-600">+ $2 reward</div>
        </li>
        <li className="border-b pb-2">
          <div className="flex justify-between">
            <span>Repayment - Month 2</span>
            <span>$425</span>
          </div>
          <div className="text-sm text-green-600">+ $2 reward</div>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 p-6 border-t border-gray-200">
      © 2025 AutoRefinance. All rights reserved.
    </footer>
  );
}
