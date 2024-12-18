const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
    score: {
        type: String
        // 0
    },
    // time: {
    //     required: true,
    // },
    // username: {
    //     required: true,
    // },
}, {collection: "scores"})

module.exports = mongoose.model("Score", scoreSchema);