import React, { useState } from "react";
import axios from "axios";
import "./idstyles.css";

const CheckById = () => {
  const [selectedId, setSelectedId] = useState("");
  const [employeesData, setEmployeesData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [searchDate, setSearchDate] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleIdChange = async (e) => {
    const id = e.target.value;
    setSelectedId(id);
    try {
      const response = await axios.get(
        "http://localhost:3001/attendance/getEmployeesById?id=" + id
      );

      if (response.data.length === 0) {
        setNoDataFound(true);
      } else {
        const formattedData = response.data.map((employee) => {
          // Format date to day/month/year
          const date = new Date(employee.date).toISOString().split('T')[0];
          
          // const date = new Date(employee.date);
          return { ...employee, date };
        });
        console.log(formattedData);
        setEmployeesData(formattedData);
        setNoDataFound(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    if (!searchDate) {
      setSearchResult("");
      return;
    }
    const foundDate = employeesData.some(
      (employee) => 
        employee.date === searchDate
    );
      
    setSearchResult(foundDate ? "Present" : "Absent");
  };

  return (
    <div className="check-by-id-container">
      <label htmlFor="employeeId" className="id-label">
        Enter Employee ID:
        <input
          type="text"
          id="employeeId"
          value={selectedId}
          onChange={handleIdChange}
        />
      </label>
      <div className="data-display">
        {noDataFound ? (
          <h2 className="no-data">No Data Found for Employee ID: {selectedId}</h2>
        ) : (
          <div>
            <h2 className="data-heading">Data for Employee ID: {selectedId}</h2>
              <h4>Check attendance for a specific date here: </h4>
            <div className="search-box">
              <input
                type="Date"
                placeholder="Search for a date (DD/MM/YYYY)"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="searchResult">
              <h2 style={{"color" : searchResult === "Present" ? "green" : "red"}}>{searchResult}</h2>
            </div>
            <div className="table-container">
              <table className="orange-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee Department</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesData.map((employee) => (
                    <tr key={employee._id}>
                      <td>{employee.name}</td>
                      <td>{employee.department}</td>
                      <td>{employee.date}</td>
                      <td>Present</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckById;
