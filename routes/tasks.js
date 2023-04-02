import express from "express";
import { allTasks, deleteTask, newTask, taskStatus } from "../controllers/tasks.js";
import { isAuthentic } from "../middlewares/authenticate.js";

const router = express.Router();

router.post('/new', isAuthentic, newTask);
router.get('/all', isAuthentic, allTasks);
router
    .route('/:id')
    .put(isAuthentic, taskStatus)
    .delete(isAuthentic, deleteTask);

export default router;