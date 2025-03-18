import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const DepositPage = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("currentUser");
    console.log("__email", userEmail);
    if (!userEmail) {
      setError("Please log in to access the deposit page.");
      navigate('/login');
      return;
    }
    if (userEmail) {
      navigate('/deposit'); // Redirect to deposit page if already logged in
      const storedBalance = parseFloat(localStorage.getItem(`balance_${userEmail}`)) || 0;
      setBalance(storedBalance);
    }
  }, [navigate]);

  const handleDeposit = (e) => {
    e.preventDefault();
    const amount = depositAmount.trim(); // Trim spaces

    // Check if the input contains only zeros or is empty
    if (!amount || /^0+$/.test(amount)) {
      setMessage("Invalid amount! Please enter a valid number greater than 0.");
      return;
    }

    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setMessage("Please enter a valid amount greater than 0.");
      return;
    }

    if (numericAmount > 50000) {
      setMessage("Deposit limit is ₹50,000. Please enter a smaller amount.");
      return;
    }

    const newBalance = balance + numericAmount;
    setBalance(newBalance);

    // Retrieve user email from localStorage safely
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const userEmail = currentUser?.email || ""; 

    localStorage.setItem(`balance_${userEmail}`, newBalance);

    const transactions = JSON.parse(localStorage.getItem(`transactions_${userEmail}`)) || [];
    transactions.push({ type: "Deposit", amount: numericAmount, timestamp: new Date() });
    localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(transactions));

    setMessage(`Deposit successful! ₹${numericAmount.toFixed(2)} added. New balance: ₹${newBalance.toFixed(2)}`);
    setDepositAmount("");
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#1d2438" }}>
      {/* Deposit Section */}
      <div className="container deposit-section h-screen my-auto mt-5 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg my-auto" style={{ background: "", color: "#1C1C1C", width: "350px" }}>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title text-center fw-bold mb-5">Deposit Funds📥</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleDeposit} className="d-flex flex-column justify-content-between">
              <div className="mb-3">
                <label htmlFor="depositAmount" className="form-label fw-bold">Amount to Deposit💰</label>
                <input
                  type="number"
                  className="form-control"
                  id="depositAmount"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#d83030", color: "#ededed" }}>
                ✔️Deposit
              </button>
            </form>
            <p className="mt-3 fw-bold" style={{ color: message.includes("Deposit limit is ₹50,000") ? "red" : "green" }}>
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
