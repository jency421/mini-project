import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const WithdrawPage = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
        // Retrieve user email from localStorage safely
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const userEmail = currentUser?.email || ""; // Ensure it doesn’t throw an error
    console.log("__email",userEmail)
    if (!userEmail) {
      setError("Please log in to access the withdraw page.");
      navigate('/login');
      return;
    }
    const storedBalance = parseFloat(localStorage.getItem(`balance_${userEmail}`)) || 0;
    setBalance(storedBalance);
  }, [navigate]);

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }
    if (amount > balance) {
      setMessage(`Insufficient funds! Available balance: ₹${balance.toFixed(2)}`);
      return;
    }
    const newBalance = balance - amount;
    setBalance(newBalance);
    const userEmail = localStorage.getItem("userEmail");
    localStorage.setItem(`balance_${userEmail}`, newBalance);
    const transactions = JSON.parse(localStorage.getItem(`transactions_${userEmail}`)) || [];
    transactions.push({ type: "Withdraw", amount, timestamp: new Date() });
    localStorage.setItem(`transactions_${userEmail}`, JSON.stringify(transactions));
    setMessage(`Withdrawal successful! ₹${amount.toFixed(2)} withdrawn. Remaining balance: ₹${newBalance.toFixed(2)}`);
    setWithdrawAmount("");
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#1d2438", color: "#1C1C1C" }}>

      {/* Withdraw Form */}
      <div className="container withdraw-section mt-5 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg" style={{color:"",width: "350px", height: ""}}>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title text-center fw-bold mb-4">Withdraw Funds📤</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleWithdraw} className="d-flex flex-column justify-content-between">
              <div className="mb-3">
                <label htmlFor="withdrawAmount" className="form-label fw-bold">Amount to Withdraw💰</label>
                <input
                  type="number"
                  className="form-control"
                  id="withdrawAmount"
                  placeholder="Enter amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  required
                  style={{ borderColor: "#555555" }}
                />
              </div>
              <button type="submit" className="btn mt-3" style={{ backgroundColor: "#d83030", color: "#ededed", fontWeight: "bold" }}>
              ✔️Withdraw
              </button>
            </form>
            <p className="mt-3 fw-bold" style={{ color: message.includes("Insufficient funds") ? "red" : "green" }}>
              {message}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default WithdrawPage;
