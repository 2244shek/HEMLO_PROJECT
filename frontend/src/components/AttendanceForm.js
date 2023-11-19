import React, { useState } from "react";
import "./attstyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AttendanceForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 6 && parseInt(otp) % 2 === 0) {
      try {
        const currentDate = new Date(); // Get current date as a Date object
        const response = await axios.post("http://localhost:3001/attendance/register", {
          name,
          id,
          department,
          date: currentDate, // Pass the date as a Date object
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
      navigate("/attendance/id");
    }
    else {
      alert("Wrong OTP !!");
      e.preventDefault();
    }
  };

  return (
    <div className="attendance-form-container">
      <form onSubmit={handleSubmit} className="attendance-form" autoComplete="off">
        <h2>Mark Attendance Here</h2>
        <label>
          Employee Name:
          <input
            type="text"
            name="employeeName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Employee ID:
          <input
            type="text"
            name="employeeID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </label>
        <label>
          OTP:
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <div id="subBar">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <Link to="/attendance/id" id="checkAtt">Check attendance here</Link>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
