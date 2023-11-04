import { ErrorRequestHandler } from "express";
import config from "../../config";
import { IGenericErrorMessage } from "../interface/error";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err instanceof Error) {
    // console.log('hei i am from Error class error')

    message = err?.message;

    errorMessages = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  }

  {
    res.status(statusCode).json({
      success: false,
      message,
      errorMessages,

      stack: config.env !== "production" ? err?.stack : undefined,
    });
    next();
  }
};

export default globalErrorHandler;
