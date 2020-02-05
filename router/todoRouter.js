const express = require("express");
const newTodo = require("../model/todo");

const router = express.Router();

router.get("/createTodo", async(req,res)=>{
    res.render("todo");
})

router.post("createtodo", async (req,res)=>{
    
    const todo = new todo({
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
    const todos = await Todo.find()
    res.render("todo", {todos});
})

router.get("/update/:id", async (req,res)=>{
    const response = await Todo.findbyid({_id:req.params.id})
    console.log(response);

    res.render("edit", {response})
})

router.post("/update/:id", async(req,res)=>{
    await Todo.updateone({_id:req.body._id},
        {$ser:{text: req.body.text, author: req.body.author} })
        console.log(req.body);
        res.redirect("/todo")
})

module.exports= router;
