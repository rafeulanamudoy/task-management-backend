"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEnum = exports.TaskStatus = void 0;
exports.TaskStatus = ["pending", "inProgress", "completed"];
var TaskEnum;
(function (TaskEnum) {
    TaskEnum[TaskEnum["pending"] = 0] = "pending";
    TaskEnum[TaskEnum["inProgress"] = 1] = "inProgress";
    TaskEnum[TaskEnum["completed"] = 2] = "completed";
})(TaskEnum = exports.TaskEnum || (exports.TaskEnum = {}));
