import { MongoError } from "mongodb";
import { IGenericErrorMessage } from "../interface/error";
const duplicateEntryError = (error: MongoError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;

  return {
    statusCode,
    message: "Email is already taken",
    errorMessages: errors,
  };
};

export default duplicateEntryError;
