const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
    },
    currAdd: {
        type: String,
    },
    presAdd: {
        type: String,
    },
    department: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    aadhar: {
        type: String,
    },
    pan: {
        type: String,
    },
    cabNum: {
        type: Number,
    },
    manager: {
        type: String,
    },
});

// Hash and salt the password before saving
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;