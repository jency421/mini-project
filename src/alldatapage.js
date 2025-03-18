import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AllDataPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
        // Retrieve user email from localStorage safely
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const userEmail = currentUser?.email || ""; // Ensure it doesn’t throw an error

    if (userEmail) {
      // Retrieve transactions for the logged-in user
      const storedTransactions = JSON.parse(localStorage.getItem(`transactions_${userEmail}`)) || [];
      setTransactions(storedTransactions);
      
      // Retrieve the user's current balance from localStorage using a key unique for the user
      const storedBalance = JSON.parse(localStorage.getItem(`balance_${userEmail}`));
      setBalance(storedBalance || 0);
    } else {
      setTransactions([]);
      setBalance(0);
    }
  }, []);


  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#1d2438", color: "white" }}>
   

      {/* Current Balance and Transaction History */}
      <div className="container data-section mt-5">
        <h1 className="text-center fw-bold">Transaction History🔄</h1>
        <div className="text-center my-4">
          <h3>💳Current Balance: ₹{Number(balance).toFixed(2)}</h3>
        </div>
        {transactions.length > 0 ? (
          <table className="table table-bordered mt-4 text-white" style={{ backgroundColor: "#1C3334" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transaction.type}</td>
                  <td>₹{transaction.amount.toFixed(2)}</td>
                  <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-3">No transactions found.</p>
        )}
      </div>
  
    </div>
  );
};

export default AllDataPage;
