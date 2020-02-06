const express = require("express");
const newtodo = require("../model/todo");

const router = express.Router();

router.get("/createtodo", async(req,res)=>{
    res.render("todo");
})

router.post("createtodo", async (req,res)=>{
    
    const todo = new newtodo({
        text: req.body.text,
        author: req.body.author
    })

    await todo.save((error, sucess)=>{
        if(error){
            console.log(error)
            res.send(error._message)
        }
        else{
            res.redirect("/todo")
        }
    })
});

router.get("/todo", async(req,res)=>{
    const todos = await todo.find()
    res.render("todo", {todos});
})

router.route("/update/:id")
.get(async (req,res)=>{
    const response = await todo.findbyid({_id:req.params.id})
    console.log(response);

    res.render("edit", {response})
})

router.post(async(req,res)=>{
    await todo.updateone({_id:req.body._id},
        {$ser:{text: req.body.text, author: req.body.author} })
        console.log(req.body);
        res.redirect("/todo")
})

module.exports= router;
