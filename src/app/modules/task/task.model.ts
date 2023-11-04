import { Schema, model } from "mongoose";

import { ITask } from "./task.interface";
import { TaskStatus } from "./task.constant";

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
      enum: TaskStatus,
    },
    userEmail: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<ITask>("Task", taskSchema);
