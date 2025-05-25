import React, { useEffect, useState } from "react";

const AllUsersHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchAllHistory = async () => {
            try {
                const response = await fetch('https://project-flask-l76w.onrender.com/api/all-history');
                if (!response.ok) throw new Error('Failed to fetch history');
                const data = await response.json();
                setHistory(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllHistory();
    }, []);

    const filteredHistory = history.filter(record => {
        const searchLower = searchTerm.toLowerCase();
        return (
            record.user_name.toLowerCase().includes(searchLower) ||
            record.user_email.toLowerCase().includes(searchLower) ||
            record.disease.toLowerCase().includes(searchLower) ||
            record.specialist.toLowerCase().includes(searchLower) ||
            [record.symptom1, record.symptom2, record.symptom3, record.symptom4, record.symptom5]
                .filter(Boolean)
                .join(' ')
                .toLowerCase()
                .includes(searchLower)
        );
    });

    // Color coding based on disease severity (example)
    const getDiseaseColor = (disease) => {
        const severeDiseases = ['cancer', 'heart disease', 'stroke'];
        const moderateDiseases = ['diabetes', 'hypertension', 'asthma'];
        
        if (severeDiseases.some(d => disease.toLowerCase().includes(d))) {
            return 'bg-danger bg-opacity-10'; // Light red for severe
        } else if (moderateDiseases.some(d => disease.toLowerCase().includes(d))) {
            return 'bg-warning bg-opacity-10'; // Light yellow for moderate
        }
        return 'bg-success bg-opacity-10'; // Light green for others
    };

    if (loading) return <div className="text-center my-5">Loading history...</div>;
    if (error) return <div className="alert alert-danger">Error: {error}</div>;

    return (
        <div className="container-fluid px-4 py-3">
            <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                    <h2 className="mb-4 text-primary">All Users Prediction History</h2>
                    
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg border-primary"
                            placeholder="Search by name, email, disease, or symptoms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="table-responsive" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                        <table className="table table-hover mb-0">
                            <thead className="sticky-top" style={{ backgroundColor: '#4a6baf', color: 'white' }}>
                                <tr>
                                    <th style={{ width: "15%" }}>User</th>
                                    <th style={{ width: "20%" }}>Email</th>
                                    <th style={{ width: "25%" }}>Symptoms</th>
                                    <th style={{ width: "15%" }}>Disease</th>
                                    <th style={{ width: "15%" }}>Specialist</th>
                                    <th style={{ width: "10%" }}>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHistory.length > 0 ? (
                                    filteredHistory.map(record => (
                                        <tr 
                                            key={record.prediction_id}
                                            className={getDiseaseColor(record.disease)}
                                        >
                                            <td className="text-truncate fw-bold" style={{ color: '#2c3e50' }} title={record.user_name}>
                                                {record.user_name}
                                            </td>
                                            <td className="text-truncate" style={{ color: '#3498db' }} title={record.user_email}>
                                                {record.user_email}
                                            </td>
                                            <td className="text-truncate" title={
                                                [record.symptom1, record.symptom2, record.symptom3, record.symptom4, record.symptom5]
                                                    .filter(Boolean)
                                                    .join(', ')
                                            }>
                                                {[record.symptom1, record.symptom2, record.symptom3, record.symptom4, record.symptom5]
                                                    .filter(Boolean)
                                                    .join(', ')}
                                            </td>
                                            <td className="fw-bold" style={{ color: '#e74c3c' }}>
                                                {record.disease}
                                            </td>
                                            <td className="text-truncate" style={{ color: '#27ae60' }}>
                                                {record.specialist}
                                            </td>
                                            <td style={{ color: '#7f8c8d' }}>
                                                {new Date(record.predicted_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-muted">
                                            {history.length === 0 ? "No history records available" : "No matching records found"}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsersHistory;