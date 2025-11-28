const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// =========================
// CREATE PROJECT (POST)
// =========================
router.post("/create-projects", async (req, res) => {
  try {
    const { projectName, projectDesc, projectImg, githubLink, projectLink } = req.body;

    const newProject = new Project({
      projectName,
      projectDesc,
      projectImg,
      githubLink,
      projectLink,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: "Error creating project", error: err.message });
  }
});

// =========================
// READ ALL PROJECTS (GET)
// =========================
router.get("/get-projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err.message });
  }
});

// =========================
// READ SINGLE PROJECT (GET)
// =========================
router.get("/get-project-by-id/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: "Error fetching project", error: err.message });
  }
});

// =========================
// UPDATE PROJECT (PUT)
// =========================
router.put("/update-project/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedProject) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: "Error updating project", error: err.message });
  }
});

// =========================
// DELETE PROJECT (DELETE)
// =========================
router.delete("/delete-project/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project", error: err.message });
  }
});

module.exports = router;
