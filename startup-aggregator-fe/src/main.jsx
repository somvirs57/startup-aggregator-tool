import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./auth/login.jsx";
import SignUp from "./auth/signup.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<DashboardLayout />}></Route>

    </Routes>
  </BrowserRouter>
);
