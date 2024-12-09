//schema for submitting usernames
const mongoose = require('mongoose');
const UsernameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
},{collection:"usernames"})

module.exports = mongoose.model('Username', UsernameSchema);