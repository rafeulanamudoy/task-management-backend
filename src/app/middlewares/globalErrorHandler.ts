import { ErrorRequestHandler } from "express";
import config from "../../config";
import { MongoError } from "mongodb";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import { IGenericErrorMessage } from "../interface/error";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import duplicateEntryError from "../errors/handleDuplicateEntryError";
import ApiError from "../errors/handleApiError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err?.name == "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  } else if (err instanceof MongoError && err.code === 11000) {
    const simplifiedError = duplicateEntryError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;

    //console.log(err, 'i am from MongoError', err.message)
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err instanceof ApiError) {
    console.log("hei i am from ApiError class error");
    statusCode = err.statusCode;
    message = err?.message;
    errorMessages = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
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
