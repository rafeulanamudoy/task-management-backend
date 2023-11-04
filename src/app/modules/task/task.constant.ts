import { ITaskStatus } from "./task.interface";

export const TaskStatus: ITaskStatus[] = ["pending", "inProgress", "completed"];

export enum TaskEnum {
  pending,
  inProgress,
  completed,
}
