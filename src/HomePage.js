import React from "react";
import bank2 from "./bank2.png";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>


      {/* Hero Section */}
      <section
        className="hero-section text-center py-5 fade-in-custom"
        style={{ backgroundColor: "#ededed", color: "#050505" }}
      >
        <h1 className="display-3 fw-bold typing-effect">Welcome to Bad Bank</h1>
        <p className="lead fw-bold">
          Your trusted partner in managing your finances.
        </p>
        <img
          src={bank2}
          alt="Bank"
          className="img-fluid bank-img-custom mt-4"
        />
        <div className="mt-4">
          <button
            className="btn btn-custom mx-2"
            onClick={() => navigate("/account")}
            style={{
              background:'#d83030',
            }}
          >
            📝 Sign-Up
          </button>
          <button
            className="btn btn-custom mx-2"
            onClick={() => navigate("/login")}
            style={{
              background:'#d83030',
            }}
          >
            🔑 Login
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="services-section text-center py-5 fade-in-custom"
        style={{ backgroundColor: "#1d2438", color: "#ededed" }}
      >
        <div className="container fade-in">
          <h2 className="mb-4 fw-bold">Our Services</h2>
          <div className="row">
            {["Secure Deposits", "Easy Withdrawals", "24/7 Support"].map(
              (service, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="glass-card-custom p-4">
                    <h4 className="fw-bold">{service}</h4>
                    <p>Experience seamless banking like never before.</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="text-center py-5 fade-in-custom"
        style={{ backgroundColor: "#ededed", color: "#1d2438" }}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>✔ Secure Transactions</h4>
              <p>Your funds are safe with us.</p>
            </div>
            <div className="col-md-4">
              <h4>⚡ Instant Transfers</h4>
              <p>Fast & reliable banking services.</p>
            </div>
            <div className="col-md-4">
              <h4>🎧 24/7 Customer Support</h4>
              <p>Always here to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section
        className="text-center py-5 fade-in-custom"
        style={{ backgroundColor: "#1d2438", color: "#ededed" }}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold">Get Started Today!</h2>
          <p className="lead">
            Join thousands of customers who trust Bad Bank.
          </p>
          <button
            className="btn btn-custom btn-lg"
            onClick={() => navigate("/account")}
            style={{background:"#d83030"}}
          >
            Open an Account
          </button>
        </div>
      </section>


      {/* Custom Styles */}
      <style>{`
        /* Smooth fade-in animations */
        .fade-in-custom {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUpCustom 1s ease-out forwards;
        }
        @keyframes fadeInUpCustom {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Image Animation */
        .bank-img-custom {
          width: 60%;
          max-width: 500px;
          transition: transform 0.5s ease-in-out;
        }
        .bank-img-custom:hover {
          transform: scale(1.1);
        }
        /* Glassmorphism Card Animation */
        .glass-card-custom {
          // background: rgba(255, 255, 255, 0.7);  
          background-color:#ededed;
          color:#1d2438;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
        }
        .glass-card-custom:hover {
          transform: translateY(-10px) rotateY(5deg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        /* Custom Buttons */
        .btn-custom {
          background-color: #E8E7AB;
          color: #ededed;
          font-weight: bold;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .btn-custom:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        .btn-custom:active {
          transform: scale(0.97);
        }
        /* Brand Color Animation */
        .brand-animate-color {
          animation: colorCycle 5s infinite;
        }
        @keyframes colorCycle {
          0%   { color: #C30E59; }
          25%  { color: #E82561; }
          50%  { color: #F2AE66; }
          75%  { color: #E8E7AB; }
          100% { color: #C30E59; }
        }
        /* Typing Effect for Hero Text - Slower */
        .typing-effect {
          overflow: hidden;
          border-right: .15em solid #ededed;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .15em;
          animation: typing 7s steps(30, end) infinite, blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #ededed; }
        }
      `}</style>
    </>
  );
};

export default HomePage;
