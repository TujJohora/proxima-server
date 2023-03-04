//importing express
const express = require("express");

const {
    postProject,
    getAllProjects,
    getSingleProject,
  } = require("../controllers/projectController");

  
// making router
//R should be capital
const router = express.Router();

// GET all projects
router.get("/", getAllProjects);

// GET a single project

router.get("/:id", getSingleProject);

// POST a new project
router.post("/", postProject);

// DELETE a project
router.delete("/:id", (req, res) => {
    res.json({ message: "DELETE a project" });
  });
  // UPDATE a project
  router.patch("/:id", (req, res) => {
    res.json({ message: "PATCH a project" });
  });
  module.exports = router;