import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate against default credentials
    if (adminName === "JENCY" && password === "jency2004") {

      localStorage.setItem("currentUser", JSON.stringify({ email: "JENCY", password: "jency2004" }));

      // Show login success modal
      setShowModal(true);
    } else {
      setErrorMsg("Invalid admin name or password.");
    } 
  };

  const handleAllData = () => {
    setShowModal(false);
    navigate('/admin/dashboard');
  };

  return (
    <>
      <div className="admin-login-page d-flex flex-column min-vh-100" style={{ background: "#1d2438" }}>
        <div className="container mt-5 my-auto fade-in card col-4 p-4" style={{ borderRadius: "1rem" }}>
          <h2 className="mb-4 text-center admin-heading" style={{ color: "#1d2438" }}>Admin Login🛠</h2>
          <form onSubmit={handleLogin} className=" ">
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <div className="mb-3">
              <label htmlFor="adminName" className="form-label admin-label" style={{ color: "#1d2438" }}>
                Admin Name👤
              </label>
              <input
                type="text"
                id="adminName"
                className="form-control"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                placeholder="Enter admin name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adminPassword" className="form-label admin-label" style={{ color: "#1d2438" }}>
                Password🔒
              </label>
              <input
                type="password"
                id="adminPassword"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="btn mt-4 w-100" style={{ backgroundColor: "#d83030", color: "#ededed" }}>
              ✔️Login
            </button>
          </form>
        </div>
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content-custom animate__animated animate__fadeInDownBig animate__faster card col-4 p-4 mt-5"
            style={{ backgroundColor: "#1d2438", color: "#D2FF72", borderRadius: "1rem", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <h3 style={{ color: "#FFFFFF", fontWeight: "bold" }}>Login Successfully 🎉</h3>
            <p style={{ color: "#FFFFFF", fontWeight: "bold" }}>Welcome, {adminName}!</p>
            <button
              className="btn btn-custom mt-3 w-100"
              onClick={handleAllData}
              style={{ backgroundColor: "#d83030", color: "#ffffff", fontWeight: "bold", borderRadius: "8px" }}
            >
              👥 Users Data
            </button>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        /* Overall Page Background */
        .admin-login-page {
          background: linear-gradient(90deg, #54C392, #15B392);
          min-height: 100vh;
          padding-top: 50px;
        }
        /* Heading and Label styling for high visibility */
        .admin-heading {
          color: #FFFFFF;
          font-weight: bold;
        }
        .admin-label {
          color: #FFFFFF;
          font-weight: bold;
        }
        /* Input styling */
        .admin-input {
          background-color: rgba(0, 0, 0, 0.5);
          color: #FFFFFF;
          font-weight: bold;
          border: 1px solid rgba(255, 255, 255, 0.7);
        }
        .admin-input::placeholder {
          color: #FFD700;
          font-weight: bold;
        }
        /* Fade-in animation */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Glassmorphism Card */
        .glass-card {
          background: #D2FF72;
          border: 2px solid #15B392;
          border-radius: 15px;
          padding: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .glass-card:hover {
          transform: translateY(-10px) rotateY(5deg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        /* Custom Button Styling */
        .btn-custom {
          background: #DA7B93;
          color: black;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px rgba(218, 123, 147, 0.6);
        }
        .btn-custom:hover {
          box-shadow: 0 0 0 1px gray;
        }
        .btn-custom:active {
          transform: scale(0.95);
          box-shadow: 0 0 10px rgba(218, 123, 147, 0.8);
        }
        /* Modal Styling */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }
        .modal-content-custom {
          background: #1d2438;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .modal-content-custom h3 {
          color: #FFFFFF;
          font-weight: bold;
        }
        .modal-content-custom p {
          color: #FFFFFF;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default AdminLoginPage;
