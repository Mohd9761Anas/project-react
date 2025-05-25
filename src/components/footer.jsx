import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#8FB3C9' }} className="text-dark pt-4 pb-3 mt-5">
      <div className="container-fluid px-5">
        <div className="row">

          {/* About - 50% width */}
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <FaHeartbeat className="text-primary me-2" size={24} />
              <h5 className="mb-0" style={{ color: '#1A3E6F' }}>HealthPredictor</h5>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#2D2D2D' }}>
              Our intelligent system helps users identify possible health issues based on symptoms 
              and recommends the appropriate medical specialist for consultation. We combine 
              medical expertise with advanced technology to provide reliable health guidance.
            </p>
          </div>

          {/* Contact Info - 50% width */}
          <div className="col-lg-6 mb-4" style={{ paddingLeft: '10%' }}>
            <h5 className="mb-3" style={{ color: '#1A3E6F' }}>Contact Information</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaEnvelope className="text-primary me-3 mt-1" size={18} />
                <div>
                  <h6 style={{ color: '#1A3E6F' }}>Email</h6>
                  <a href="mailto:support@healthpredictor.com" className="text-dark text-decoration-none fw-medium">
                    support@healthpredictor.com
                  </a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaPhone className="text-primary me-3 mt-1" size={18} />
                <div>
                  <h6 style={{ color: '#1A3E6F' }}>Phone</h6>
                  <span className="fw-medium">+91-9876543210</span>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="text-primary me-3 mt-1" size={18} />
                <div>
                  <h6 style={{ color: '#1A3E6F' }}>Location</h6>
                  <span className="fw-medium">Aligarh, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark opacity-25" />
        <div className="text-center">
          <small className="d-block mb-1" style={{ color: '#1A3E6F' }}>
            © {new Date().getFullYear()} HealthPredictor. All rights reserved.
          </small>
          <small className="text-dark opacity-75">Medical Disclaimer: This tool does not provide medical diagnosis.</small>
        </div>
      </div>

      {/* Custom hover effect */}
      <style jsx>{`
        a:hover {
          color: #1A3E6F !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
