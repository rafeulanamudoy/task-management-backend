import { z } from "zod";
import { TaskEnum } from "./task.constant";

const createTaskSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is Required",
    }),

    description: z.string({
      required_error: "description is Required",
    }),

    userEmail: z
      .string({
        required_error: "userEmail is Required",
      })
      .email("this is not a valid email"),
  }),
  status: z
    .enum([...Object.values(TaskEnum)] as [string, ...string[]], {})
    .optional(),
});

export const TaskValidation = {
  createTaskSchema,
};
