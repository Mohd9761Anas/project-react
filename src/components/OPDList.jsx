import React, { useState } from "react";
import axios from "axios";

const OPDList = () => {
  const [opdName, setOpdName] = useState("");
  const [opdData, setOpdData] = useState([]);
  const [error, setError] = useState(null);

  const opdOptions = ["Cardiologist", "Dermatologist","General_surgeon", "Endocrinologist","Gastroenterologist", "Medicine","Haematology","Neurologist","Orthopedics","Urologist"];

  const fetchOPDDetails = async () => {
    if (!opdName) {
      setError("Please select an OPD.");
      return;
    }

    try {
      // const response = await axios.get(`http://localhost:5000/api/opd/${opdName}`);
      const response = await axios.get(`https://project-flask-l76w.onrender.com/api/opd/${opdName}`);
      setOpdData(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch OPD details.");
      setOpdData([]);
    }
  };

  return (
    <div className=" opdList d-flex justify-content-center align-items-center  w-100" style={{ backgroundColor: "#A9C3D0"}}>
      <div className="container p-4  shadow rounded" style={{ maxWidth: "800px" }}>
        <h2 className="mb-3 text-center">Select OPD</h2>
        <div className="d-flex gap-2">
          <select 
            className="form-select w-75"
            value={opdName}
            onChange={(e) => setOpdName(e.target.value)}
          >
            <option value="">Choose OPD</option>
            {opdOptions.map((opd) => (
              <option key={opd} value={opd}>{opd.charAt(0).toUpperCase() + opd.slice(1)}</option>
            ))}
          </select>
          <button className="btn btn-primary w-25" onClick={fetchOPDDetails}>Show</button>
        </div>
        {error && <div className="text-danger mt-2 text-center">{error}</div>}
        {opdData.length > 0 && (
          <div className="mt-4">
            <h3 className="text-center">{opdName.charAt(0).toUpperCase() + opdName.slice(1)} OPD ({opdData[0]?.opd_number})</h3>
            <h4 className="text-center">{opdData[0]?.address}</h4>
            <table className="table table-bordered mt-3">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Day</th>
                  <th>Cabin</th>
                 
                </tr>
              </thead>
              <tbody>
                {opdData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.day}</td>
                    <td>{row.cabin}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OPDList;