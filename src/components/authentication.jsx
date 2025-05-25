import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null);
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const response = await axios.post(`https://project-flask-l76w.onrender.com${endpoint}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      
      // Store user data and token
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      setUser(response.data.user);
      navigate("/");
    } catch (err) {
      console.error("Auth Error:", err.response?.data?.error);
      setError(err.response?.data?.error || "Something went wrong");
    }
  };
  
  return (
    <div className="login d-flex justify-content-center align-items-center min-vh-100 w-100 bg-dark">
      <div className="container p-4 bg-white shadow rounded w-100" style={{ maxWidth: "400px" }}>
        <h2 className="mb-3 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p className="mt-3 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <span className="text-primary" style={{ cursor: "pointer" }} onClick={toggleForm}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
