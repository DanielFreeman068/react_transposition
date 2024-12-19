const User = require("../models/User");
const Score = require('../models/Score');

const readAllScores = async (req, res) => {
    try {
        let scores = await Score.find({});
        res.json({ success: true, data: scores });
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
}


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
//function for score creation
const createOrUpdateScoreOne = async (req, res) => {
    try {
        const { username, time, level } = req.body;

        if (!username || !time || !level) {
            return res.status(400).json({ error: 'Level, time, and username are required' });
        }

        const existingScore = await Score.findOne({ username, level });

        // Check if there is no existing score or if the new time is better (lower)
        if (!existingScore || time < existingScore.time) {
            const updatedScore = await Score.findOneAndUpdate(
                { username, level },       // Search criteria
                { time },                  // Update the time field
                { upsert: true, new: true } // Create if not exists, return updated document
            );

            return res.status(201).json({
                success: true,
                message: existingScore
                    ? `New best score for Level ${level}!`
                    : `Score created successfully for Level ${level}.`,
                data: updatedScore
            });
        }

        // If the new score is not better, return the existing score
        return res.status(200).json({
            success: true,
            message: `Score for Level ${level} is not better than the existing score.`,
            data: existingScore
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: "Server error, please try again later"
        });
    }
};



module.exports = { createUser, createOrUpdateScoreOne, readAllScores };
