import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import RegisterForm from "./components/Form";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/employees" element={<EmployeeList/>} />
      </Routes>
    </Router>
  );
}

export default App;
