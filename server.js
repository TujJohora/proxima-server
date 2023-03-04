require("dotenv").config();

//importing express
const express = require("express");

// creating express app
const app = express();

//VARIABLE FOR PORT 
const port=process.env.PORT|| 4000;
//listen for requests
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});