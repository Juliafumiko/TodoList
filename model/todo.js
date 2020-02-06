const mongoose = require("mongoose")

const SchemaTodo = new mongoose.Schema(
    {
        text: {type: String, required: true, minlength:5}


})

const todo = mongoose.model("todo", SchemaTodo);

module.exports = todo;