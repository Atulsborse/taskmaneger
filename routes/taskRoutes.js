const express = require('express');
const { getTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getTasks).post(protect, createTask);
router.route('/:id').get(protect, getTaskById).put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
