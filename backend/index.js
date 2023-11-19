const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const eventRoute = require("./routes/eventRoute");
const attendanceRoute = require("./routes/attendanceroute");
// const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
// Include the User model
// const User = require('./models/User');

app.use(cors());
const PORT = 3001;

// Connect to MongoDb ...
mongoose.connect("mongodb+srv://orbitguyasdf:Atlas2244@cluster01.u90eefs.mongodb.net/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database Connected !!...");
})

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/events", eventRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/attendance', attendanceRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});