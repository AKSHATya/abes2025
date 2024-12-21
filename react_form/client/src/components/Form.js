import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
      setResponse("Form submitted successfully!");
      setError("");
    } catch (err) {
      setError("Error submitting the form.");
      setResponse("");
    }
  };
  const viewEmployees = () => {
    navigate("/employees");
  };

  return (
    <div className="form-container">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <p className="success">{response}</p>}
      {error && <p className="error">{error}</p>}
      <button onClick={viewEmployees}>View Employees</button>
    </div>
  );
};

export default RegisterForm;