//importing express
const express = require("express");

// making router
//R should be capital
const router = express.Router();

// GET all projects
router.get("/",(req, res) =>{
    res.json({message:"GET all projects"});
    
});

// GET a single project

router.get("/",(req, res) =>{
    res.json({message:"GET a single project"});
    
});
// POST a new project
router.post("/",(req, res) =>{
    res.json({message:"POST a new project"});
    
});

// DELETE a project
router.delete("/",(req, res) =>{
    res.json({message:"DELETE a project"});
    
});

// UPDATE a project

router.patch("/:id",(req, res) =>{
    res.json({message:"UPDATE a project"});
    
});
//exporting router
module.exports = router;