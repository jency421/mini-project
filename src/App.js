import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from "./AccountPage";
import DepositPage from "./DepositPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import WithdrawPage from "./WithdrawPage";
import AllDataPage from "./alldatapage";
import AdminLoginPage from "./AdminLoginPage";
import AdminDashboard from "./AdminDashboard";
import HeaderPage from "./layout/HeaderPage";
import FooterPage from "./layout/FooterPage";

const App = () => {
  return (
    <Router>
      <HeaderPage /> {/* Moved inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/transactions" element={<AllDataPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <a href="/" style={{ textDecoration: "none", color: "blue" }}>
                Go Back to Home
              </a>
            </div>
          }
        />
      </Routes>
      <FooterPage/>
    </Router>
  );
};

export default App;
