const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        maxLength:[20, "The name cannot exceed 20 characters"]
    },
    id:{
        type:Date
    },
    email:{
        type:String
    }
}, {collection: "users"})

module.exports = mongoose.model("User", userSchema);