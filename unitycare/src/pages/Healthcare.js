import React from "react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  return (
    <div className="page container">

      {/* Header */}
      <h1>Healthcare Resources</h1>
      <p>
        Access essential healthcare services during a pandemic — find hospitals,
        check symptoms, book teleconsultations, and stay updated with vaccination support.
      </p>

      {/* Services Grid */}
      <div className="health-grid">

        {/* Hospital Finder */}
        <div className="card">
          <h2>🏥 Find Nearby Hospitals</h2>
          <p>
            Locate hospitals, clinics, and emergency healthcare facilities near you.
          </p>
          <button className="btn btn-primary">Search Hospitals</button>
        </div>

        {/* Symptom Checker */}
        <div className="card">
          <h2>🩺 Symptom Checker</h2>
          <p>
            Check symptoms and get guidance on possible health risks and next steps.
          </p>
          <button className="btn btn-primary">Check Symptoms</button>
        </div>

        {/* Telemedicine */}
        <div className="card">
          <h2>📞 Telemedicine</h2>
          <p>
            Connect with doctors online for consultation and medical advice from home.
          </p>
          <button className="btn btn-primary">Start Consultation</button>
        </div>

        {/* Vaccination */}
        <div className="card">
          <h2>💉 Vaccination Support</h2>
          <p>
            Track vaccination schedules, reminders, and availability near your location.
          </p>
          <button className="btn btn-primary">View Vaccination Info</button>
        </div>

      </div>

      {/* Health Tracking */}
      <div className="card">
        <h2>Daily Health Tracker</h2>
        <p>
          Monitor your temperature, oxygen levels, and symptoms regularly to stay safe.
        </p>

        <div className="health-inputs">
          <input type="text" placeholder="Body Temperature" />
          <input type="text" placeholder="Oxygen Level (SpO2)" />
          <input type="text" placeholder="Symptoms" />
          <button className="btn btn-secondary">Save Health Data</button>
        </div>
      </div>

    </div>
  );
};


export default Healthcare;
