import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TaskService } from "./task.service";
import { Request, Response } from "express";
import { IpaginationOptions } from "../../../interface/pagination";
import { ITask } from "./task.interface";

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
const getTask = catchAsync(async (req: Request, res: Response) => {
  const email = req.params.email;

  const query = req.query;

  const result = await TaskService.getTask(email, query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,

    message: "Task get successfully",
    data: result,
  });
});
const updateSingleTask = catchAsync(async (req: Request, res: Response) => {
  const updatedTask = req.body;
  const id = req.params.id;

  const result = await TaskService.updateSingleTask(id, updatedTask);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,

    message: "Task updated successfully",
    data: result,
  });
});
const deleteSingleTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await TaskService.deleteSingleTask(id);
  sendResponse<ITask>(res, {
    success: true,
    statusCode: httpStatus.OK,

    message: "Task deleted successfully",
    data: result,
  });
});
export const TaskController = {
  createTask,
  getTask,
  updateSingleTask,
  deleteSingleTask,
};
