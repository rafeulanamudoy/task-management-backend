import { ITask } from "./task.interface";
import { Task } from "./task.model";

const createTask = async (task: ITask): Promise<ITask | null> => {
  const userTask = await Task.create(task);
  return userTask;
};
export const TaskService = {
  createTask,
};
