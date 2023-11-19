const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  id: String,
  department: String,
  date: { type: Date, default: Date.now }, // Default date to current date
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
