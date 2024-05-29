import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/signUpPage";
import Signin from "./pages/auth/signInPage";
import Dashboard from "./pages/dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>

    </Routes>
  </BrowserRouter>
);
