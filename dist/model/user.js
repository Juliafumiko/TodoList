"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number
});

var user = mongoose.model("user", userSchema);

module.exports = user;