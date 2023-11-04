import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./auth.service";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;

  const result = await UserService.createUser(user);

  if (result !== null) {
    const data = result;

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,

      message: "Users created successfully",
      data: data,
    });
  }
});

export const UserController = {
  createUser,
};
