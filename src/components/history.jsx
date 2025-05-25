import React, { useEffect, useState } from "react";

const UserHistory = ({ user }) => {
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchHistory = async () => {
        if (!user?.id) return;

        setLoading(true);
        setError(null);

        try {
            console.log(`Fetching history for user ID: ${user.id}`);
            const response = await fetch(`https://project-flask-l76w.onrender.com/api/user-history/${user.id}`);

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const data = await response.json();
            console.log("History Data:", data);
            setHistory(data);
        } catch (error) {
            console.error("Error fetching history:", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleHistory = () => {
        if (!showHistory) fetchHistory(); // Fetch only when opening
        setShowHistory(!showHistory);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4 mx-auto" style={{ width: "100%", maxWidth: "1000px", textAlign: "center" }}>
                <button className="btn btn-primary btn-lg mb-3" onClick={toggleHistory} disabled={loading}>
                    {loading ? "Loading..." : showHistory ? "Hide History" : "Show History"}
                </button>

                {error && <p className="text-danger">Error: {error}</p>}

                {showHistory && (
                    <>
                        <h2 className="mb-3">Your Prediction History</h2>

                        {history.length === 0 ? (
                            <p className="text-muted">No past predictions found.</p>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th className="text-center">Symptoms</th>
                                            <th className="text-center">Predicted Disease</th>
                                            <th className="text-center">Recommended Specialist</th>
                                            <th className="text-center">Prediction Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {history.map((record, index) => (
                                            <tr key={index}>
                                                <td className="text-center">
                                                    {[record.symptom1, record.symptom2, record.symptom3, record.symptom4, record.symptom5]
                                                        .filter(Boolean)
                                                        .join(", ")}
                                                </td>
                                                <td className="text-center">{record.disease}</td>
                                                <td className="text-center">{record.specialist}</td>
                                                <td className="text-center">{new Date(record.predicted_at).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default UserHistory;
