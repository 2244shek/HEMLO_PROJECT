const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

router.post('/', async (req, res) => {
    const { name, username, password, phoneNumber } = req.body;
    const data = {
        name  ,
        username  ,
        password  ,
        phoneNumber 
    }
    try {
        // Check if the username is already taken
        const existingUser = await User.findOne({ username : username  });
        if (existingUser) {
            res.json("exist")
            // return res.status(400).json({ message: 'Username already taken' });
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }
        // Create a new user
        // const newUser = new User({
        //     name,
        //     username,
        //     password,
        //     phoneNumber,
        // });
        // // Save the user to the database
        // await newUser.save();
        // res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        res.json("fail");
        console.error('Registration failed', error);
        // res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
