import React, { useContext } from "react";
import Home from "./components/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthCotext } from "./state/AuthContext";

const App = () => {
  const { user } = useContext(AuthCotext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
