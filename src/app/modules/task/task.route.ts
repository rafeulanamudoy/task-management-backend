import express from "express";
import { TaskController } from "./task.controller";
import validateRequest from "../../middlewares/validateRequest";
import { TaskValidation } from "./task.validation";

const router = express.Router();

export const TaskRoutes = router;
router.post(
  "/create-task",
  validateRequest(TaskValidation.createTaskSchema),
  TaskController.createTask
);
router.get("/:email", TaskController.getTask);
router.patch("/:id", TaskController.updateSingleTask);
router.delete("/:id", TaskController.deleteSingleTask);
