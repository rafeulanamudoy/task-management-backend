export type ITaskStatus = "pending" | "inProgress" | "completed";

export type ITask = {
  title: string;
  description: string;
  status: ITaskStatus;
  userEmail: string;
};
export type IQuery = {
  search?: string;
  status?: string;
  title?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
};
