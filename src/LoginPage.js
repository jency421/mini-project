import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("currentUser");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error state
  
    // Retrieve stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Normalize email input
    const normalizedEmail = email.trim().toLowerCase();
  
    // Find user with matching email and password
    const user = storedUsers.find(
      (u) => u.email.trim().toLowerCase() === normalizedEmail && u.password === password
    );
  
    if (!user) {
      setError("Invalid email or password. Please try again.");
      return;
    }
  
    // Store user details in localStorage
    localStorage.setItem("userEmail", normalizedEmail);
    localStorage.setItem("currentUser", JSON.stringify(user));
  
    // Show login success modal
    setShowModal(true);
  };
  

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#1d2438" }}>
      {/* Navigation Bar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#15B392" }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/" style={{ color: "#D2FF72" }}>
            🏦Bad Bank
          </a>
          <div className="collapse navbar-collapse">
            <div className="d-flex ms-auto">
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => navigate("/")}
              >
                🏠 Home
              </button>
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => navigate("/account")}
              >
                📝 Sign-Up
              </button>
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => navigate("/login")}
              >
                🔑 Login
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      <Container className="my-auto py-5 fade-in" >
        <div className="card shadow-lg p-4 shadow-sm mx-5 col-4 mx-auto border-0" style={{borderRadius:"1rem"}}>
          <h3 className="text-center fw-bold">Login 🔑</h3>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#1C1C1C" }}>📧 Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{  color: "#1C1C1C" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#1C1C1C" }}>🔐 Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{  color: "#1C1C1C" }}
              />
            </Form.Group>

            <button
              className="w-100 mt-4 btn"
              onClick={handleLogin}
              style={{ backgroundColor: "#d83030", color: "#ededed" }}
            >
              ✔️ Login
            </button>
          </Form>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header closeButton style={{ backgroundColor: "#1d2438", color: "#ededed" }}>
    <Modal.Title>Login Successful 👍</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{ backgroundColor: "#1d2438", color: "#ededed" }}>
    Welcome back! Choose an action:
  </Modal.Body>
  <Modal.Footer style={{ backgroundColor: "#1d2438" }}>
    <Button
      onClick={() => navigate("/deposit")}
      style={{ backgroundColor: "#d83030", color: "#ededed", fontWeight: "bold" }}
    >
      📥 Deposit
    </Button>
    <Button
      onClick={() => navigate("/withdraw")}
      style={{ backgroundColor: "#d83030", color: "#ededed", fontWeight: "bold" }}
    >
      📤 Withdraw
    </Button>
    <Button
      onClick={() => navigate("/transactions")}
      style={{ backgroundColor: "#d83030", color: "#ededed", fontWeight: "bold" }}
    >
      🔄 Transaction History
    </Button>
  </Modal.Footer>
</Modal>


      {/* Custom Styles */}
    
    </div>
  );
};

export default LoginPage;
