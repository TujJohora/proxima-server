require("dotenv").config();

//importing express
const express = require("express");

// creating express app
const app = express();

//VARIABLE FOR PORT 
const port=process.env.PORT|| 4000;

// middlewares
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next(); // for getting another next req
});


//routes
app.get('/',(req,res)=>{
    res.json({message:"welcome the express app!"});
});

//listen for requests
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});