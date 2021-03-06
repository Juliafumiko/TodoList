const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./router/todoRouter");
const sassMiddleware = require("node-sass-middleware")
const config = require("./config/config");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended:true}))



app.set("view engine", "ejs")

app.use(sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public")
}))
app.use(express.static(path.join(__dirname,"public")));
app.use(todoRouter)


const port = process.env.PORT || 8001;
const options ={
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(config.databaseURL,options).then(()=>{
    console.log("sucess")
    app.listen(port);
})