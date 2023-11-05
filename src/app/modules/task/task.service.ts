import { any } from "zod";
import { IQuery, ITask } from "./task.interface";
import { Task } from "./task.model";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IpaginationOptions } from "../../../interface/pagination";
import { SortOrder } from "mongoose";
import { IGenericResponse } from "../../interface/common";

const createTask = async (task: ITask): Promise<ITask | null> => {
  const userTask = await Task.create(task);
  return userTask;
};
const getTask = async (
  email: string,
  query: IQuery
): Promise<IGenericResponse<ITask[]>> => {
  const paginationOptions: IpaginationOptions = {
    page: query.page,
    limit: query.limit,
    sortBy: query.sortBy,
    sortOrder: query.sortOrder,
  };
  const { skip, limit, page, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  let condition: any = {};
  const sortCondition: { [key: string]: SortOrder } = {};

  if (query.search) {
    condition.title = { $regex: query.search, $options: "i" };
  }
  if (query.status) {
    condition.status = query.status;
  }
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  console.log(condition, "i am from service");

  const result = await Task.find({
    $and: [{ userEmail: email }, condition],
  })
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  return {
    meta: {
      page,
      limit,
    },
    data: result,
  };
};
const updateSingleTask = async (
  id: string,
  payload: Partial<ITask>
): Promise<ITask | null> => {
  const result = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteSingleTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskService = {
  createTask,
  getTask,
  updateSingleTask,
  deleteSingleTask,
};
