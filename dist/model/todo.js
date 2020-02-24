"use strict";

var mongoose = require("mongoose");

var SchemaTodo = new mongoose.Schema({
    text: { type: String, required: true, minlength: 5 }

});

var todo = mongoose.model("todo", SchemaTodo);

module.exports = todo;