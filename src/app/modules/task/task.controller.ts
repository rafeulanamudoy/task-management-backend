import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TaskService } from "./task.service";
import { Request, Response } from "express";

const createTask = catchAsync(async (req: Request, res: Response) => {
  const task = req.body;

  const result = await TaskService.createTask(task);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,

    message: "Task created successfully",
    data: result,
  });
});

export const TaskController = {
  createTask,
};
