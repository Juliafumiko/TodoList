const express = require("express");
const todo = require("../model/todo");
const router = express.Router();

router.route("/todo")
.get(async(req,res)=>{
        const sorted = req.query.sort ||1;
        const todos = await todo.find().sort({text :sorted})
        res.render("todo", {todos});
})

.post(async (req,res,next)=>{
    
    const tod = new todo({
        text: req.body.text,
    })

    await tod.save((error, sucess)=>{
        if(error){
            console.log(error)
            res.send(error._message)
        }
        else{
            res.redirect("/todo")
            next();
        }
    })
});


router.route("/delete/:id")
.get(async(req,res,next)=>{
    console.log(req.params.id);
    await todo.deleteOne({_id:req.params.id});
    res.redirect("/todo")
    next();

})

router.route("/update/:id")
.get(async (req,res)=>{
    const response = await todo.findById({_id:req.params.id})
    console.log(response);

    res.render("edit", {response})
})

.post(async(req,res,next)=>{
    await todo.updateOne({_id:req.body._id},
        {$set: {text: req.body.text}},{runValidators:true},(err)=>{
            err? res.send(err.message): res.redirect("/todo")
           next();
        })
        console.log(req.body);
})

module.exports= router;
