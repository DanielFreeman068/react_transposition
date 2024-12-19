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
}, {collection: "firstLevels"})

module.exports = mongoose.model("FirstLevel", scoreSchema);