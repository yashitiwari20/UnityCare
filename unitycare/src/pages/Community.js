import React, { useState } from "react";

const Community = () => {
  const [form, setForm] = useState({
    name: "",
    helpType: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Help request submitted! Volunteers will reach out soon.");
    setForm({ name: "", helpType: "", message: "" });
  };

  return (
    <div className="page container">

      {/* Header */}
      <div className="page-header">
        <h1>Community Support</h1>
        <p>
          UnityCare connects people with volunteers for essential help during
          health emergencies. Request assistance or become a volunteer to support
          your community.
        </p>
      </div>

      {/* Request Help */}
      <div className="card">
        <h2>Request Help</h2>
        <form onSubmit={handleSubmit} className="help-form">
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <select
            name="helpType"
            value={form.helpType}
            onChange={handleChange}
            required
          >
            <option value="">Select Help Type</option>
            <option value="Food">Food & Essentials</option>
            <option value="Medicine">Medicines</option>
            <option value="Transport">Hospital Transport</option>
            <option value="Emotional">Emotional Support</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your situation..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit Request
          </button>
        </form>
      </div>

      {/* Volunteer Section */}
      <div className="card">
        <h2>Become a Volunteer</h2>
        <p>
          Support your community by helping people with essentials, guidance,
          and emergency assistance.
        </p>
        <button className="btn btn-secondary">Join as Volunteer</button>
      </div>

      {/* Community Guidelines */}
      <div className="card">
        <h2>Community Guidelines</h2>
        <ul>
          <li>🤝 Be respectful and supportive</li>
          <li>✔ Share verified and accurate information</li>
          <li>🚑 Prioritize emergency cases</li>
          <li>🔒 Protect privacy and personal data</li>
        </ul>
      </div>

    </div>
  );
};

export default Community;
