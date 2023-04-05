import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/tasks.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.js";
import cors from "cors";

export const app = express();
config({ path: './data/config.env' })

// Using Middlewares.
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: null,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);

// Routing.
app.use('/users', userRouter);
app.use('/tasks', taskRouter);

// Using Error Middleware.
app.use(errorHandler);
