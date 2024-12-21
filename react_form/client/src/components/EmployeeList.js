import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setEmployees(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };
    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="grid-container">
        {employees.map((employee) => (
          <div className="grid-item" key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>Company: {employee.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
