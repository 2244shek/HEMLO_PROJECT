import React, { useState } from "react";
import axios from "axios";
import "./checkstyles.css";

const CheckByDate = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [employeesPresent, setEmployeesPresent] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    try {
      const response = await axios.get(
        "http://localhost:3001/getEmployeesByDate?date=" + date
      );

      if (response.data.length === 0) {
        setNoDataFound(true);
      } else {
        const uniqueEmployees = response.data.filter(
          (employee, index, self) =>
            index ===
            self.findIndex(
              (e) =>
                e.name === employee.name &&
                e.id === employee.id &&
                e.department === employee.department
            )
        );

        setEmployeesPresent(uniqueEmployees);
        setNoDataFound(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const totalPresent = employeesPresent.length;

  return (
    <div className="check-by-date-container">
      <label htmlFor="datePicker" className="date-label">
        Select Date :
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </label>
      <div className="data-display">
        {noDataFound ? (
          <h2 className="no-data">No Data Found for {selectedDate}</h2>
        ) : (
          <div>
            <h2 className="present-heading">
              Employees Present on {selectedDate}:
            </h2>
            <p className="total-present">
              Number of Employees present: {totalPresent}
            </p>
            <div className="table-container">
              <table className="orange-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Employee Department</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesPresent.map((employee) => (
                    <tr key={employee._id}>
                      <td>{employee.name}</td>
                      <td>{employee.id}</td>
                      <td>{employee.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="thank-you">Thank you!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckByDate;
