import { MongoError } from "mongodb";
import { IGenericErrorMessage } from "../interface/error";
const duplicateEntryError = (error: MongoError) => {
  //console.log(error, "i am from duplicate entry");
  const errors: IGenericErrorMessage[] = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;
  // Add code here if you want to do something with the errors

  return {
    statusCode,
    message: "Duplicate Entry",
    errorMessages: errors,
  };
};

export default duplicateEntryError;
