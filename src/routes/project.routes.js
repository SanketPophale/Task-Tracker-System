const express = require('express')
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const { createProject, getProjects, deleteProject } = require("../controllers/project.controllers");

router.post('/', auth, createProject);
router.post('/', auth, getProjects);
router.post('/', auth, deleteProject);

module.exports = router;