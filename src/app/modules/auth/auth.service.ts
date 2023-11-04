import { IUser } from "./auth.interface";
import { User } from "./auth.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  // console.log(user)

  const createUser = await User.create(user);
  return createUser;
};

export const UserService = {
  createUser,
};
