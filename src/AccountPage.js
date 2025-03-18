import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    dateOfBirth: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "name" && !/^[A-Za-z ]*$/.test(value)) return;
    if (id === "phone" && !/^[0-9]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Normalize email (trim spaces & convert to lowercase)
    const normalizedEmail = formData.email.trim().toLowerCase();

    // Check if email is already registered
    const emailExists = existingUsers.some(
      (user) => user.email.toLowerCase() === normalizedEmail
    );

    if (emailExists) {
      setErrorMessage("An account with this email already exists.");
      return;
    }

    if (formData.phone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrorMessage("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.");
      return;
    }

    // Save new user with normalized email
    const newUser = { ...formData, email: normalizedEmail };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSuccessMessage(`Account created successfully! Welcome, ${formData.name}.`);
    setFormData({ name: "", phone: "", email: "", password: "", address: "", gender: "", dateOfBirth: "" });
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#1d2438" }}>
      {/* Navigation Bar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#15B392" }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/" style={{ color: "#D2FF72" }}>🏦Bad Bank</a>
          <div className="collapse navbar-collapse">
            <div className="d-flex ms-auto">
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => window.location.href = "/"}
              >
                🏠 Home
              </button>
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => window.location.href = "/account"}
              >
                📝 Sign-Up
              </button>
              <button
                className="btn nav-btn fw-bold mx-1"
                onClick={() => window.location.href = "/login"}
              >
                🔑 Login
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="container my-auto py-5 fade-in ">
        <div className="card shadow-lg p-4 shadow-sm mx-5 col-6 mx-auto border-0" style={{borderRadius:"1rem"}}>
          <h3 className="text-start mb-4" style={{ color: "#1C1C1C" }}>Create an Account 📝</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>👤 Full Name</label>
              <input type="text" className="form-control" style={{ color: "#1C1C1C" }} id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>📞 Phone Number</label>
              <input type="tel" className="form-control" style={{ color: "#1C1C1C" }} id="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>📧 Email</label>
              <input type="email" className="form-control" style={{ color: "#1C1C1C" }} id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label" style={{ color: "#1C1C1C" }}>🔐 Password</label>
              <input type={showPassword ? "text" : "password"} className="form-control" style={{ color: "#1C1C1C" }} id="password" value={formData.password} onChange={handleChange} required />
              <button type="button" style={{ top: "50px", right: "10px" }} className="btn btn-outline-secondary position-absolute  translate-middle-y" onClick={() => setShowPassword(!showPassword)}>
                {/* <i className={`bi bi-eye${showPassword ? "-slash" : ""} bi-${showPassword ? "slash" : ""}`} /> */}
                <i class="bi bi-0-circle-fill" />
              </button>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>⚧️ Gender</label>
              <select className="form-control" style={{ color: "#1C1C1C" }} id="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>🏦 Account Type</label>
              <select className="form-control" style={{ color: "#1C1C1C" }} id="accountType" value={formData.accountType} onChange={handleChange} required>
                 <option value="">Select Account Type</option>
                 <option value="Current">Current Account</option>
                 <option value="Saving">Saving Account</option>
              </select>
             </div>

            <div className="mb-3">
              <label className="form-label" style={{ color: "#1C1C1C" }}>📅 Date of Birth</label>
              <input type="date" className="form-control" style={{ color: "#1C1C1C" }} id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
            {/* <div className="justify-content-center"> */}
            <button type="submit" className="btn  w-100 mt-4" style={{ backgroundColor: "#d83030", color: "#ededed" }}>✔️ Sign-Up</button>
            {/* </div> */}
          </form>

          {successMessage && <p className="mt-3" style={{ color: "#15B392" }}>{successMessage}</p>}
          {errorMessage && <p className="mt-3" style={{ color: "#E82561" }}>{errorMessage}</p>}
        </div>
      </div>

      {/* Custom Styles */}
     
    </div>
  );
};

export default AccountPage;
