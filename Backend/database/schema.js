const mongoose = require("mongoose");

require('dotenv').config()

mongoose.connect("mongodb+srv://priteshrajpurohit85:prit@pribbledb.ex28o.mongodb.net/?retryWrites=true&w=majority&appName=Pribbledb")


const userSchema = new mongoose.Schema({
    userName: String,
    webSocketID: String,
    points: Number,
    room : String 
}); 


const User = mongoose.model("User", userSchema);

module.exports = { User };   