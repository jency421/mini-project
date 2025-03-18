// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const HeaderPage = () =>{

//     {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#15B392" }}>
//         <div className="container-fluid">
//           <a className="navbar-brand fw-bold" href="/" style={{ color: "#D2FF72" }}>🏦Bad Bank</a>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <div className="d-flex">
//               <button className="btn nav-btn fw-bold mx-1" onClick={() => navigate("/")}>
//                 🏠 Home
//               </button>
//               <button className="btn nav-btn fw-bold mx-1" onClick={() => navigate("/deposit")}>
//                 📥 Deposit
//               </button>
//               <button className="btn nav-btn fw-bold mx-1" onClick={() => navigate("/withdraw")}>
//                 📤 Withdraw
//               </button>
//               <button className="btn nav-btn fw-bold mx-1" onClick={() => navigate("/transactions")}>
//                 🔄 Transactions History
//               </button>
//             </div>
//             <button className="btn fw-bold" style={{ backgroundColor: "#DA7B93", color: "black" }} onClick={handleLogout}>
//             🚶‍♂️Logout
//             </button>
//           </div>
//         </div>
//       </nav> */}

//       // <div className="collapse navbar-collapse">
//       // <div className="d-flex ms-auto">
//       //   <button
//       //     className="btn nav-btn fw-bold mx-1"
//       //     onClick={() => window.location.href = "/"}
//       //   >
//       //     🏠 Home
//       //   </button>
//       //   <button
//       //     className="btn nav-btn fw-bold mx-1"
//       //     onClick={() => window.location.href = "/account"}
//       //   >
//       //     📝 Sign-Up
//       //   </button>
//       //   <button
//       //     className="btn nav-btn fw-bold mx-1"
//       //     onClick={() => window.location.href = "/login"}
//       //   >
//       //     🔑 Login
//       //   </button>
//       // </div>
//     // </div>



//     const location = useLocation();
//     const navigate = useNavigate();
//     const [listOfNavigaions,setListOfNavigaions]=useState([
//       { path: "/", label: "🏠 Home" },
//       { path: "/account", label: "📝 Sign-Up" },
//       { path: "/login", label: "🔑 Login" },
//       { path: "/admin", label: "🛠 Admin" },
//     ])

//     useEffect(()=>{
//       // const userEmail = localStorage.getItem("userEmail");
//       // if (!userEmail) {        
//       //   setListOfNavigaions([ { path: "/account", label: "📝 Sign-Up" }])
//       //   navigate('/login');
//       //   return;
//       // }

//       const path =location?.pathname
//       if(path === "/deposit" ||path === "/withdraw" || path === "/transactions"  ){
//         setListOfNavigaions(()=>[
//           { path: "/", label: "🏠 Home" },
//           { path: "/deposit", label: "📤 Deposit" },
//           { path: "/withdraw", label: "📤 Withdraw" },
//           { path: "/transactions", label: "🔄 Transactions History" },
//           { path: "/login", label: "🚶‍♂️Logout" ,type:"logout"},
//         ])
//       }

//       if(path==="/"){
//         setListOfNavigaions(()=>[
//           { path: "/", label: "🏠 Home" },
//           { path: "/account", label: "📝 Sign-Up" },
//           { path: "/login", label: "🔑 Login" },
//           { path: "/admin", label: "🛠 Admin" },
//         ])
//       }

//       if(path==="/admin"){
//         setListOfNavigaions(()=>[
//           { path: "/", label: "🏠 Home" },        
//           {path:"/admin/dashboard",label:"📊 Dashboard"},
//           { path: "/login", label: "🔑 Login" },
//           { path: "/account", label: " 📝 Sign-Up " },
//           // { path: "/login", label: "🚶‍♂️Logout" ,type:"logout"},
//         ])
//       }

//       console.log("_locations",location)

//     },[location])

//     localStorage.removeItem("userEmail");

//     const handleNavigations=(path,type)=>{
//       console.log("__path",path)
//       if(type){
//         navigate(path)
//         localStorage.removeItem("userEmail");
//         alert("You have been logged out! Please sign up to login again.");

//       }
// navigate(path)
//     }

//     return  (
          
//           <nav className="navbar navbar-expand-lg navbar-custom shadow-lg">
//           <div className="container-fluid">
//             <a
//               className="navbar-brand text-dark fw-bold brand-animate-color"
//               href="/"
//             >
//               🏦Bad Bank
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse justify-content-end"
//               id="navbarNav"
//             >
//               <div className="d-flex">
//                 {listOfNavigaions?.length > 0 && listOfNavigaions?.map((item) => (
//                   <button
//                     key={item.path}
//                     className={`btn nav-btn mx-1 ${
//                       location.pathname === item.path ? "active" : ""
//                     }`}
//                     onClick={()=>handleNavigations(item.path,item?.type)}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </nav>
//     )    

// }

// export default HeaderPage


// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import React from 'react';

// const HeaderPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [listOfNavigations, setListOfNavigations] = useState([]);

//   useEffect(() => {
//     const path = location?.pathname;

//     if (path.startsWith("/admin")) {
//       setListOfNavigations([
//         { path: "/admin/dashboard", label: "📊 Dashboard" },
//       ]);
//     } else if (path === "/deposit" || path === "/withdraw" || path === "/transactions") {
//       setListOfNavigations([
//         { path: "/", label: "🏠 Home" },
//         { path: "/deposit", label: "📤 Deposit" },
//         { path: "/withdraw", label: "📤 Withdraw" },
//         { path: "/transactions", label: "🔄 Transactions History" },
//         { path: "/login", label: "🚶‍♂️ Logout", type: "logout" },
//       ]);
//     } else {
//       setListOfNavigations([
//         { path: "/", label: "🏠 Home" },
//         { path: "/account", label: "📝 Sign-Up" },
//         { path: "/login", label: "🔑 Login" },
//         { path: "/admin", label: "🛠 Admin" },
//       ]);
//     }
//   }, [location]);

//   const handleNavigations = (path, type) => {
//     if (type === "logout") {
//       localStorage.removeItem("userEmail");
//       alert("You have been logged out! Please sign up to login again.");
//     }
//     navigate(path);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-custom shadow-lg">
//       <div className="container-fluid">
//         <a className="navbar-brand text-dark fw-bold brand-animate-color" href="/">
//           🏦Bad Bank
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <div className="d-flex">
//             {listOfNavigations.map((item) => (
//               <button
//                 key={item.path}
//                 className={`btn nav-btn mx-1 ${location.pathname === item.path ? "active" : ""}`}
//                 onClick={() => handleNavigations(item.path, item?.type)}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HeaderPage;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [listOfNavigations, setListOfNavigations] = useState([]);

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/admin")) {
      setListOfNavigations([{ path: "/admin/dashboard", label: "📊 Dashboard" }]);
    } else if (["/deposit", "/withdraw", "/transactions"].includes(path)) {
      setListOfNavigations([
        { path: "/", label: "🏠 Home" },
        { path: "/deposit", label: "📤 Deposit" },
        { path: "/withdraw", label: "📤 Withdraw" },
        { path: "/transactions", label: "🔄 Transactions History" },
        { path: "/login", label: "🚶‍♂️ Logout", type: "logout" },
      ]);
    } else {
      setListOfNavigations([
        { path: "/", label: "🏠 Home" },
        { path: "/account", label: "📝 Sign-Up" },
        { path: "/login", label: "🔑 Login" },
        { path: "/admin", label: "🛠 Admin" },
      ]);
    }
  }, [location]);

  const handleNavigations = (path, type) => {
    if (type === "logout") {
      localStorage.removeItem("currentUser"); // Remove correct key
      alert("You have been logged out!");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw-bold brand-animate-color" href="/">
          🏦 Bad Bank
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex">
            {listOfNavigations.map((item) => (
              <button
                key={item.path}
                className={`btn nav-btn mx-1 ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => handleNavigations(item.path, item?.type)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
