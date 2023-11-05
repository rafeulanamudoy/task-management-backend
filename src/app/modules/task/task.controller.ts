import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TaskService } from "./task.service";
import { Request, Response } from "express";
import { IpaginationOptions } from "../../../interface/pagination";

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
  console.log(email);
  const query = req.query;

  console.log(query, "i am from controller");

  const result = await TaskService.getTask(email, query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,

    message: "Task get successfully",
    data: result,
  });
});

export const TaskController = {
  createTask,
  getTask,
};
