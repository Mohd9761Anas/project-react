// import React, { useState } from "react";
// import axios from "axios";

// const symptomsList = [
//   "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills",
//   "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting",
//   "burning_micturition", "spotting_ urination", "fatigue", "weight_gain", "anxiety",
//   "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy",
//   "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
//   "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin",
//   "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain",
//   "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
//   "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
//   "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
//   "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
//   "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
//   "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
//   "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
//   "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties",
//   "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
//   "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
//   "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance",
//   "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
//   "foul_smell_of urine", "continuous_feel_of_urine", "passage_of_gases",
//   "internal_itching", "toxic_look_(typhos)", "depression", "irritability", "muscle_pain",
//   "altered_sensorium", "red_spots_over_body", "belly_pain", "abnormal_menstruation",
//   "dischromic _patches", "watering_from_eyes", "increased_appetite", "polyuria",
//   "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration",
//   "visual_disturbances", "receiving_blood_transfusion", "receiving_unsterile_injections",
//   "coma", "stomach_bleeding", "distention_of_abdomen", "history_of_alcohol_consumption",
//   "fluid_overload.1", "blood_in_sputum", "prominent_veins_on_calf", "palpitations",
//   "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling",
//   "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister",
//   "red_sore_around_nose", "yellow_crust_ooze"
// ];

// const PredictDisease = ({ user }) => {
//   const [symptoms, setSymptoms] = useState(["", "", "", "", ""]);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (index, value) => {
//     const newSymptoms = [...symptoms];
//     newSymptoms[index] = value;
//     setSymptoms(newSymptoms);
//   };

//   const handleSubmit = async () => {
//     if (symptoms.some((symptom) => symptom === "")) {
//       setError("Please select all symptoms.");
//       setResult(null);
//       return;
//     }
  
//     try {
//       const response = await axios.post("http://localhost:8000/predict", {
//         symptoms,
//       });
  
//       const disease = response.data.predicted_disease;
//       const specialist = response.data.recommended_specialist;
  
//       setResult({ disease, specialist });
//       setError(null);
  
//       // ✅ Store prediction in backend
//       if (user?.user_id) {
//         await axios.post("http://localhost:5000/api/store-prediction", {
//           user_id: user.id,
//           symptom1: symptoms[0],
//           symptom2: symptoms[1],
//           symptom3: symptoms[2],
//           symptom4: symptoms[3],
//           symptom5: symptoms[4],
//           disease,
//           specialist,
//         });
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Prediction failed. Please try again.");
//       setResult(null);
//     }
//   };
  

//   return (
//     <div className="container">
//       <h2 className="my-3">Disease Prediction</h2>

//       {symptoms.map((symptom, index) => (
//         <select
//           key={index}
//           className="form-select my-2"
//           value={symptom}
//           onChange={(e) => handleChange(index, e.target.value)}
//         >
//           <option value="">Select Symptom {index + 1}</option>
//           {symptomsList.map((sym, i) => (
//             <option key={i} value={sym}>
//               {sym.replace(/_/g, " ")}
//             </option>
//           ))}
//         </select>
//       ))}

//       <button className="btn btn-primary my-3" onClick={handleSubmit}>
//         Predict Disease
//       </button>

//       {error && <div className="text-danger">{error}</div>}

//       {result && (
//         <div className="mt-3">
//           <h4>Predicted Disease: {result.disease}</h4>
//           <h5>Recommended Specialist: {result.specialist}</h5>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PredictDisease;



import React, { useState } from "react";
import axios from "axios";

const symptomsList = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills",
  "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting",
  "burning_micturition", "spotting_ urination", "fatigue", "weight_gain", "anxiety",
  "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy",
  "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
  "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin",
  "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain",
  "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
  "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
  "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
  "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
  "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
  "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
  "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
  "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties",
  "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
  "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
  "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance",
  "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
  "foul_smell_of urine", "continuous_feel_of_urine", "passage_of_gases",
  "internal_itching", "toxic_look_(typhos)", "depression", "irritability", "muscle_pain",
  "altered_sensorium", "red_spots_over_body", "belly_pain", "abnormal_menstruation",
  "dischromic _patches", "watering_from_eyes", "increased_appetite", "polyuria",
  "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration",
  "visual_disturbances", "receiving_blood_transfusion", "receiving_unsterile_injections",
  "coma", "stomach_bleeding", "distention_of_abdomen", "history_of_alcohol_consumption",
  "fluid_overload.1", "blood_in_sputum", "prominent_veins_on_calf", "palpitations",
  "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling",
  "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister",
  "red_sore_around_nose", "yellow_crust_ooze"
];

const PredictDisease = ({ user }) => {
  const [symptoms, setSymptoms] = useState(["", "", "", "", ""]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isStoring, setIsStoring] = useState(false);

  const handleChange = (index, value) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = value;
    setSymptoms(newSymptoms);
    // Clear errors when user modifies inputs
    if (error) setError(null);
  };

  const storePrediction = async (predictionData) => {
    if (!user?.id) return;
    
    setIsStoring(true);
    try {
      await axios.post("https://project-flask-l76w.onrender.com/api/store-prediction", predictionData);
    } catch (err) {
      console.error("Failed to store prediction:", err);
      // Don't show this error to user - it doesn't affect their prediction
    } finally {
      setIsStoring(false);
    }
  };

  const handleSubmit = async () => {
    // Validate inputs
    if (symptoms.some(symptom => symptom === "")) {
      setError("Please select all 5 symptoms.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      // Step 1: Get prediction from ML model
      const response = await axios.post("https://project-flask-l76w.onrender.com/predict", { symptoms });
      
      const disease = response.data.predicted_disease;
      const specialist = response.data.recommended_specialist;
      
      setResult({ disease, specialist });

      // Step 2: Store prediction in database
      const predictionData = {
        user_id: user.id,
        symptom1: symptoms[0],
        symptom2: symptoms[1],
        symptom3: symptoms[2],
        symptom4: symptoms[3],
        symptom5: symptoms[4],
        disease,
        specialist
      };
      
      await storePrediction(predictionData);

    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.response?.data?.error || "Prediction failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="my-3">Disease Prediction</h2>

      {symptoms.map((symptom, index) => (
        <select
          key={index}
          className="form-select my-2"
          value={symptom}
          onChange={(e) => handleChange(index, e.target.value)}
          disabled={isStoring}
        >
          <option value="">Select Symptom {index + 1}</option>
          {symptomsList.map((sym) => (
            <option key={sym} value={sym}>
              {sym.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      ))}

      <button 
        className="btn btn-primary my-3" 
        onClick={handleSubmit}
        disabled={isStoring}
      >
        {isStoring ? "Processing..." : "Predict Disease"}
      </button>

      {error && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div className="card mt-3">
          <div className="card-body">
            <h4 className="card-title">Prediction Results</h4>
            <div className="mb-2">
              <strong>Predicted Disease:</strong> {result.disease}
            </div>
            <div>
              <strong>Recommended Specialist:</strong> {result.specialist}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictDisease;