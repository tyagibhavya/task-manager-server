import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/tasks.js";

export const newTask = async (req, res, next) => {
    try {
        const { title, decription } = req.body;

        await Task.create({
            title,
            decription,
            user: req.user,
        });

        res.status(201).json({
            success: true,
            message: 'Task Added Successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const allTasks = async (req, res, next) => {
    try {
        const userID = req.user._id;
        const tasks = await Task.find({ user: userID });

        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        next(error);
    }
};

export const taskStatus = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler('Invalid ID', 404));

        task.isComplete = !task.isComplete;
        await task.save();

        res.status(200).json({
            success: true,
            message: 'Task Upadated',
        });
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler('Invalid ID', 404));

        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: 'Task Deleted',
        });
    } catch (error) {
        next(error);
    }
};