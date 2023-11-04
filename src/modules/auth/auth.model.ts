import { Schema, model } from "mongoose";
import { IUser } from "./auth.interface";

const userSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", userSchema);
