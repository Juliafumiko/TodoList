const mongoose = require("mongoose")

const SchemaTodo = new mongoose.Schema(
    {
        text: {type: String, required: true, minlength:5},
        Date: {type: Date, default: Date.now},
        author: {type: String, required: true}


})

const Todo = mongoose.model("todo", SchemaTodo);

module.exports = Todo;