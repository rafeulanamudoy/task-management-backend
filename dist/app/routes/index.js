"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const task_route_1 = require("../modules/task/task.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.UserRoutes,
    },
    {
        path: "/task",
        route: task_route_1.TaskRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.routes = router;
