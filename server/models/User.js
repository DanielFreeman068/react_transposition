const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    id:{
        type:Date,
        required: true
    }
}, {collection: "users"})

module.exports = mongoose.model("User", userSchema);