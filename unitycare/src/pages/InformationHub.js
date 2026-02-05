import React from "react";

const InformationHub = () => {
  return (
    <div className="page container">
      
      {/* Header */}
      <div className="page-header">
        <h1>Information Hub</h1>
        <p>
          Stay informed with verified pandemic updates, safety guidelines, and
          trusted resources. UnityCare ensures you receive accurate and helpful
          information to protect yourself and your community.
        </p>
      </div>

      {/* Latest Updates */}
      <div className="card">
        <h2>Latest Pandemic Updates</h2>
        <ul>
          <li>📊 Daily case trends and health advisories</li>
          <li>🏥 Vaccination updates and eligibility</li>
          <li>🌍 Government announcements & travel guidelines</li>
        </ul>
      </div>

      {/* Safety Guidelines */}
      <div className="card">
        <h2>Safety Guidelines</h2>
        <ul>
          <li>😷 Wear masks in crowded places</li>
          <li>🧼 Wash hands frequently</li>
          <li>📏 Maintain social distancing</li>
          <li>💉 Stay updated with vaccinations</li>
        </ul>
      </div>

      {/* Verified Resources */}
      <div className="card">
        <h2>Verified Resources</h2>
        <p>
          Access trusted health organizations and official pandemic information.
        </p>
        <button className="btn btn-primary">View Resources</button>
      </div>

      {/* Community Awareness */}
      <div className="card">
        <h2>Community Awareness</h2>
        <p>
          Help spread awareness by sharing accurate information and supporting
          people in need during health emergencies.
        </p>
        <button className="btn btn-secondary">Share Awareness</button>
      </div>
    </div>
  );
};

export default InformationHub;
