"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskValidation = void 0;
const zod_1 = require("zod");
const task_constant_1 = require("./task.constant");
const createTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "title is Required",
        }),
        description: zod_1.z.string({
            required_error: "description is Required",
        }),
        userEmail: zod_1.z
            .string({
            required_error: "userEmail is Required",
        })
            .email("this is not a valid email"),
    }),
    status: zod_1.z
        .enum([...Object.values(task_constant_1.TaskEnum)], {})
        .optional(),
});
exports.TaskValidation = {
    createTaskSchema,
};
