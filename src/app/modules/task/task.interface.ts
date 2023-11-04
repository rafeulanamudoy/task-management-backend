export type ITaskStatus = "pending" | "inProgress" | "completed";

export type ITask = {
  title: string;
  description: string;
  status: ITaskStatus;
};
