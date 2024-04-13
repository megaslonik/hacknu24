import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";
// import { ReactComponent as Logo } from "../assets/logo.svg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8081/user/login", {
//         username: username,
//         password: password,
//       });

//       if (response.status === 200) {
//         const role = response.data.object.role;

//         if (role === "ADMIN") {
//           navigate("/tasks");
//         } else if (role === "FUELING_PERSON") {
//           navigate("/fuelings");
//         } else if (role === "MAINTENANCE_PERSON") {
//           navigate("/maintenance");
//         } else {
//           console.log("Unknown role:", role);
//         }
//       }
//     } catch (error) {
//       toast.error("The username or password is incorrect", {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       console.error("Login failed:", error.message);
//     }
//   };

  return (
    <div className="login-container">
      {/* <Logo className="logo" alt="VehicleVue Logo" /> */}
      <ToastContainer />
      <div className="login-input-form">
        <div className="label-container">
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
        </div>
        <button className="login-button"/* onClick={handleLogin}*/>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
