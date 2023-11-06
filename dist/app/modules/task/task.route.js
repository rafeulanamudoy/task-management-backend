"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("./task.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const task_validation_1 = require("./task.validation");
const router = express_1.default.Router();
exports.TaskRoutes = router;
router.post("/create-task", (0, validateRequest_1.default)(task_validation_1.TaskValidation.createTaskSchema), task_controller_1.TaskController.createTask);
router.get("/:email", task_controller_1.TaskController.getTask);
router.patch("/:id", task_controller_1.TaskController.updateSingleTask);
router.delete("/:id", task_controller_1.TaskController.deleteSingleTask);
