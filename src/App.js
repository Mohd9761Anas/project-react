
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/nav";
import AuthPage from "./components/authentication";
import Home from "./components/home";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <Nav user={user} setUser={setUser} /> {/* Ensure Nav updates on logout */}
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



