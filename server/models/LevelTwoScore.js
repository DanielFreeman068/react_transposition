const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    time: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
}, {collection: "scores"})

module.exports = mongoose.model("Score", scoreSchema);