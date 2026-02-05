import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>UnityCare — Pandemic Response Toolkit</h1>
          <p>
            Helping individuals and communities stay safe, informed, and connected
            during health emergencies through healthcare access, mental wellness
            support, and real-time information.
          </p>

          <div className="hero-buttons">
            <Link to="/healthcare" className="btn btn-primary">
              Find Healthcare
            </Link>
            <Link to="/community" className="btn btn-secondary">
              Get Community Support
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <h2>Core Services</h2>

        <div className="features-grid">

          <div className="card">
            <h3>Healthcare Access</h3>
            <p>
              Locate nearby hospitals, access telemedicine, track symptoms,
              and manage vaccination reminders.
            </p>
            <Link to="/healthcare" className="btn btn-primary">
              Explore
            </Link>
          </div>

          <div className="card">
            <h3>Mental Health Support</h3>
            <p>
              Guided meditation, therapy resources, stress-relief activities,
              and mood tracking for emotional well-being.
            </p>
            <Link to="/mental-health" className="btn btn-primary">
              Explore
            </Link>
          </div>

          <div className="card">
            <h3>Information Hub</h3>
            <p>
              Verified pandemic updates, government guidelines, safety protocols,
              and real-time alerts.
            </p>
            <Link to="/information" className="btn btn-primary">
              Explore
            </Link>
          </div>

          <div className="card">
            <h3>Community Support</h3>
            <p>
              Connect with volunteers, request help, support neighbors, and
              share local updates.
            </p>
            <Link to="/community" className="btn btn-primary">
              Explore
            </Link>
          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <div className="container">
          <h2>Why UnityCare Matters</h2>
          <p>
            During pandemics, access to healthcare, mental support, and accurate
            information becomes critical. UnityCare bridges this gap by bringing
            essential services into one easy-to-use platform.
          </p>

          <ul>
            <li>✔ Faster access to healthcare resources</li>
            <li>✔ Reduced misinformation</li>
            <li>✔ Mental health support during isolation</li>
            <li>✔ Stronger community collaboration</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Home;
