const project = require("../models/project.models");

exports.createProject = async ( req, res) => {
    try {
        const userProjects = await Project.find({ user: req.userId});
        if(userProjects.length >=4)
            return res.status(400).json({ message: "Max 4 projects allowed" });

        const project = await Project.create({ title: req.body.title, user: req.userId });
        res.status(201).json(project);
    }catch (err) {
        res.status(500).json({ message: err.message});
    }
};


exports.getProjects = async (req, res) => {
    try {
      const projects = await Project.find({ user: req.userId });
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.deleteProject = async (req, res) => {
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.json({ message: "Project deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };