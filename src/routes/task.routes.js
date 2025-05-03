const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task.controllers');

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;