const User = require("../models/User");
const FirstLevel = require('../models/LevelOneScore');
const SecondLevel = require('../models/LevelTwoScore');
const ThirdLevel = require('../models/LevelThreeScore');
const FourthLevel = require('../models/LevelFourScore');

//reading level data functions
const readOneScores = async (req, res) => {
    try {
        let scoresOne = await FirstLevel.find({});
        res.json({ success: true, data: scoresOne });
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
}

const readTwoScores = async (req, res) => {
    try {
        let scoresTwo = await SecondLevel.find({});
        res.json({ success: true, data: scoresTwo });
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
}

const readThreeScores = async (req, res) => {
    try {
        let scoresThree = await ThirdLevel.find({});
        res.json({ success: true, data: scoresThree });
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
}

const readFourScores = async (req, res) => {
    try {
        let scoresFour = await FourthLevel.find({});
        res.json({ success: true, data: scoresFour });
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
}

//creating users data function
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


//functions for score creation
const createOrUpdateScoreOne = async (req, res) => {
    try {
        const { username, time, level } = req.body;

        if (!username || !time || !level) {
            return res.status(400).json({ error: 'Level, time, and username are required' });
        }

        const existingScore = await FirstLevel.findOne({ username, level });

        // Check if there is no existing score or if the new time is better (lower)
        if (!existingScore || time < existingScore.time) {
            const updatedScore = await FirstLevel.findOneAndUpdate(
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

const createOrUpdateScoreTwo = async (req, res) => {
    try {
        const { username, time, level } = req.body;

        if (!username || !time || !level) {
            return res.status(400).json({ error: 'Level, time, and username are required' });
        }

        const existingScore = await SecondLevel.findOne({ username, level });

        // Check if there is no existing score or if the new time is better (lower)
        if (!existingScore || time < existingScore.time) {
            const updatedScore = await SecondLevel.findOneAndUpdate(
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

const createOrUpdateScoreThree = async (req, res) => {
    try {
        const { username, time, level } = req.body;

        if (!username || !time || !level) {
            return res.status(400).json({ error: 'Level, time, and username are required' });
        }

        const existingScore = await ThirdLevel.findOne({ username, level });

        // Check if there is no existing score or if the new time is better (lower)
        if (!existingScore || time < existingScore.time) {
            const updatedScore = await ThirdLevel.findOneAndUpdate(
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

const createOrUpdateScoreFour = async (req, res) => {
    try {
        const { username, time, level } = req.body;

        if (!username || !time || !level) {
            return res.status(400).json({ error: 'Level, time, and username are required' });
        }

        const existingScore = await FourthLevel.findOne({ username, level });

        // Check if there is no existing score or if the new time is better (lower)
        if (!existingScore || time < existingScore.time) {
            const updatedScore = await FourthLevel.findOneAndUpdate(
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



module.exports = { createUser, createOrUpdateScoreOne, createOrUpdateScoreTwo, createOrUpdateScoreThree, createOrUpdateScoreFour, readOneScores, readTwoScores, readThreeScores, readFourScores };
