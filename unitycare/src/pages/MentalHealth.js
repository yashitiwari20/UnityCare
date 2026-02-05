import React, { useState } from "react";

const MentalHealth = () => {
  const [mood, setMood] = useState("");

  return (
    <div className="page container">

      {/* Header */}
      <h1>Mental Health Support</h1>
      <p>
        Caring for mental well-being during a pandemic is essential. UnityCare
        provides tools, resources, and support to help manage stress, anxiety,
        and emotional challenges.
      </p>

      {/* Mood Tracker */}
      <div className="card">
        <h2>Daily Mood Tracker</h2>
        <p>How are you feeling today?</p>

        <div className="mood-buttons">
          <button onClick={() => setMood("Happy")} className="btn btn-secondary">😊 Happy</button>
          <button onClick={() => setMood("Calm")} className="btn btn-secondary">😌 Calm</button>
          <button onClick={() => setMood("Anxious")} className="btn btn-secondary">😟 Anxious</button>
          <button onClick={() => setMood("Stressed")} className="btn btn-secondary">😣 Stressed</button>
          <button onClick={() => setMood("Sad")} className="btn btn-secondary">😢 Sad</button>
        </div>

        {mood && <p className="mood-result">You selected: <strong>{mood}</strong></p>}
      </div>

      {/* Meditation */}
      <div className="card">
        <h2>Guided Meditation</h2>
        <p>Short exercises to reduce stress and improve focus.</p>

        <ul>
          <li>🧘 Breathing exercise (5 min)</li>
          <li>🧠 Mindfulness meditation</li>
          <li>💤 Sleep relaxation audio</li>
        </ul>
      </div>

      {/* Therapist Support */}
      <div className="card">
        <h2>Talk to a Professional</h2>
        <p>
          Connect with certified therapists and mental health professionals for
          guidance and emotional support.
        </p>

        <button className="btn btn-primary">Find Support</button>
      </div>

      {/* Emergency */}
      <div className="card emergency">
        <h2>Emergency Emotional Support</h2>
        <p>
          If you feel overwhelmed or in crisis, seek immediate help from trusted
          support services.
        </p>

        <button className="btn btn-primary">Get Immediate Help</button>
      </div>

    </div>
  );
};

export default MentalHealth;
