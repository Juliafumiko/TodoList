const express = require("express");
const mongoose = require("mongoose");
// const todoRouter = require("./router/todoRouter");
const config = require("./config/config");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"scss")));
app.set("view engine", "ejs")

// app.use(todoRouter)

const port = process.env.PORT || 8000;
const options ={
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL,options).then(()=>{
    console.log("sucess")
    app.listen(port);
})