"use strict";

var express = require("express");
var todo = require("../model/todo");
var router = express.Router();

router.route("/todo").get(async function (req, res) {
    var sorted = req.query.sort || 1;
    var todos = await todo.find().sort({ text: sorted });
    res.render("todo", { todos: todos });
}).post(async function (req, res, next) {

    var tod = new todo({
        text: req.body.text
    });

    await tod.save(function (error, sucess) {
        if (error) {
            console.log(error);
            res.send(error._message);
        } else {
            res.redirect("/todo");
            next();
        }
    });
});

router.route("/delete/:id").get(async function (req, res, next) {
    console.log(req.params.id);
    await todo.deleteOne({ _id: req.params.id });
    res.redirect("/todo");
    next();
});

router.route("/update/:id").get(async function (req, res) {
    var response = await todo.findById({ _id: req.params.id });
    console.log(response);

    res.render("edit", { response: response });
}).post(async function (req, res, next) {
    await todo.updateOne({ _id: req.body._id }, { $set: { text: req.body.text } }, { runValidators: true }, function (err) {
        err ? res.send(err.message) : res.redirect("/todo");
        next();
    });
    console.log(req.body);
});

module.exports = router;