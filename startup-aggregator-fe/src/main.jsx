import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Dashboard.jsx";
import Signup from "./signup.jsx";
import Signin from "./signin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />}></Route>
      <Route path="/dashboard" element={<DashboardLayout />}></Route>

    </Routes>
  </BrowserRouter>
);
