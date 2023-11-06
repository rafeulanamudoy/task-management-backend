import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./auth.service";
import { Request, Response } from "express";
import config from "../../../config";
import { IRefreshTokenResponse } from "./auth.interface";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;

  const result = await UserService.createUser(user);

  if (result !== null) {
    const { password, ...others } = result;
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,

      message: "User created successfully",
      data: others,
    });
  }
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await UserService.loginUser(loginData);

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  if (result !== null) {
    const { refreshToken, ...others } = result;

    res.cookie("refreshToken", refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User logged in successfully!",
      data: others,
    });
  }
});

export const UserController = {
  createUser,
  loginUser,
};
