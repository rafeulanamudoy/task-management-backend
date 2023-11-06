"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const task_constant_1 = require("./task.constant");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending",
        enum: task_constant_1.TaskStatus,
    },
    userEmail: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
