import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Nav = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (!user) {
      navigate("/auth");
    }
  };
  const handleHome = () => {
    
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom" style={{ backgroundColor: '#27506c' }}>
      <div className="container-fluid nav">
        <a className="navbar-brand" href="#">
          <img alt="Logo" width="40" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={handleHome}>
              <a className="nav-link active" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">About</a>
            </li>
            <li className="nav-item">
              <button className="nav-link active">Contact</button>
            </li>
          </ul>
          <div className="d-flex align-items-center" role="search">
            <FontAwesomeIcon 
              icon={faUser} 
              className="user-icon" 
              onClick={handleUserClick} 
              style={{ cursor: "pointer", color: "white" }} 
            />
            {user ? (
              <>
                <span className="ms-2 text-white">{user.name}</span>
                <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
