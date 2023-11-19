const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ username });
        if(user){
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
        // if (!user) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        // Check if the password is correct
        // const passwordMatch = await bcrypt.compare(password, user.password);
        // if (!passwordMatch) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        // res.status(200).json({ message: 'Login successful', userData: user });
    } catch (error) {
        console.error('Login failed', error);
        res.json("fail");
        // res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
