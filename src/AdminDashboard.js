// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {

//             // Retrieve user email from localStorage safely
// const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
// const userName = currentUser?.email || ""; // Ensure it doesn’t throw an error
//     console.log("__email",userName)

//     if(userName !=="JENCY"){
// navigate("/login")
// return
//     }

//     // Retrieve the users from localStorage
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || []; 
//     setUsers(storedUsers);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     alert("You have been logged out! Please sign up to login again.");
//     window.location.href = "/";
//   };

//   return (
//     <div className="admin-dashboard" style={{ background: "#1d2438", minHeight: "100vh", color: "#000", padding: "2rem", position: "relative" }}>
      
//       {/* Logout Button Positioned at Top-Right */}
//       <button 
//         className="btn fw-bold logout-btn"
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           backgroundColor: "#ededed",
//           color: "black",
//           fontWeight: "bold"
//         }}
//         onClick={handleLogout}
//       >
//          🚶‍♂️Logout
//       </button>

//       <h2 className="text-center mb-4" style={{color:"#ededed"}}>Admin Dashboard</h2>

//       {users.length === 0 ? (
//         <p className="text-center" style={{color:"#ededed"}}>No users found.</p>
//       ) : (
//         <table className="table table-dark table-striped mt-4">
//           <thead>
//             <tr>
//               <th>SL No</th>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Date of Birth</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.dateOfBirth}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Retrieve user email from localStorage safely
//     const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
//     const userName = currentUser?.email || ""; // Ensure it doesn’t throw an error
//     console.log("__email", userName);

//     if (userName !== "JENCY") {
//       navigate("/login");
//       return;
//     }

//     // Retrieve the users from localStorage
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     setUsers(storedUsers);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     alert("You have been logged out! Please sign up to login again.");
//     window.location.href = "/";
//   };

//   return (
//     <div className="admin-dashboard" style={{ background: "#1d2438", minHeight: "100vh", color: "#000", padding: "2rem", position: "relative" }}>
      
//       {/* Logout Button Positioned at Top-Right */}
//       <button 
//         className="btn fw-bold logout-btn"
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           backgroundColor: "#ededed",
//           color: "black",
//           fontWeight: "bold"
//         }}
//         onClick={handleLogout}
//       >
//          🚶‍♂️Logout
//       </button>

//       <h2 className="text-center mb-4" style={{ color: "#ededed" }}>Admin Dashboard</h2>

//       {users.length === 0 ? (
//         <p className="text-center" style={{ color: "#ededed" }}>No users found.</p>
//       ) : (
//         <table className="table table-dark table-striped mt-4">
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.dateOfBirth}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user email from localStorage safely
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const userEmail = currentUser?.email || ""; // Prevents errors if null

    console.log("__email", userEmail);

    if (userEmail !== "JENCY") {
      navigate("/login");
      return;
    }

    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("You have been logged out! Redirecting to login page.");
    navigate("/login"); // Ensures redirection
  };

  return (
    <div
      className="admin-dashboard"
      style={{
        background: "#1d2438",
        minHeight: "100vh",
        color: "#000",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Logout Button Positioned at Top-Right */}
      <button
        className="btn fw-bold logout-btn"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#ededed",
          color: "black",
          fontWeight: "bold",
        }}
        onClick={handleLogout}
      >
        🚶‍♂️ Logout
      </button>

      <h2 className="text-center mb-4" style={{ color: "#ededed" }}>
        Admin Dashboard
      </h2>

      {users.length === 0 ? (
        <p className="text-center" style={{ color: "#ededed" }}>
          No users found.
        </p>
      ) : (
        <table className="table table-dark table-striped mt-4">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
