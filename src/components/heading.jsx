import React from "react";

const Heading = () => {
  return (
    <div
      className="heading w-100 min-vh-100 d-flex align-items-center justify-content-center text-white position-relative"
    //   style={{
    //     fontFamily: "'Open Sans', sans-serif",
    //     backgroundImage: "url('images/heading.webp')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.6 }}></div>
      
      {/* Content */}
      <div className="text-center px-4 position-relative" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 fw-bold mb-4">
          We Believe Everyone Should Have Easy Access To Great Health Care
        </h1>
        
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-lg px-4">GET STARTED</button>
          <button className="btn btn-outline-light btn-lg px-4">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
