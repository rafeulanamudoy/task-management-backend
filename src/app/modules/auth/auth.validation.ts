import { z } from "zod";

const signUpZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: "Password is Required",
    }),
    name: z.object({
      firstName: z.string({
        required_error: "First Name is Required",
      }),
      lastName: z.string({
        required_error: "Last  Name is Required",
      }),
    }),
    email: z
      .string({
        required_error: "Email is Required",
      })
      .email("this is not a valid email"),
  }),
});

export const AuthValidation = {
  signUpZodSchema,
};
