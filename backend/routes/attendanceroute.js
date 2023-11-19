const router = require("express").Router();
const EmployeeModel = require("../models/Employee");

router.get("/employees/:date", async (req, res) => {
    const date = new Date(req.params.date);
    try {
        const employees = await EmployeeModel.find({ date });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/getEmployeesByDate", async (req, res) => {
    try {
        const { date } = req.query;
        const employees = await EmployeeModel.find({
            date: { $gte: new Date(date), $lt: new Date(date + "T23:59:59.999Z") },
        });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/getEmployeesById", async (req, res) => {
    try {
        const { id } = req.query;
        const employees = await EmployeeModel.find({ id });

        if (employees.length === 0) {
            return res.json([]);
        }

        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/register", async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router