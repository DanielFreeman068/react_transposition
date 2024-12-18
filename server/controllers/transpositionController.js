const User = require("../models/User");
const Score = require('../models/Score');

const createUser = async(req, res) => {
    try {
        // Destructure username and id from the request body
        const { username, id } = req.body;

        // Check if all required fields are provided
        if (!username || !id) {
            return res.status(400).json({
                success: false,
                msg: "Please fill out all fields"
            });
        }

        // Check if a user with the same id already exists
        let existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "That username's already taken, try another"
            });
        }

        // Create the new user if no issues
        let newUser = await User.create({ username, id });

        // Return success response
        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            msg: "Server error, please try again later"
        });
    }
}

const createScore = async(req, res) => {
    try {
        const { level, time, username } = req.body;

        if (!level || !time || !username) {
        return res.status(400).json({ error: 'Level, time, and username are required' });
        }
    
        console.log('Level Completed:', level, 'Time:', time, 'User:', username);
    
        let newScore = await Score.create({ username, level, time});
    
        // Return success response
        res.status(201).json({
            success: true,
            data: newScore
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            msg: "Server error, please try again later"
        });
    }
}

module.exports = { createUser, createScore };
