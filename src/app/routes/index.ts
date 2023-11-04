import express from "express";
import { UserRoutes } from "../modules/auth/auth.route";
import { TaskRoutes } from "../modules/task/task.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/task",
    route: TaskRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const routes = router;
