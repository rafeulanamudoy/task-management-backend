"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_model_1 = require("./task.model");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const userTask = yield task_model_1.Task.create(task);
    return userTask;
});
const getTask = (email, query) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOptions = {
        page: query.page,
        limit: query.limit,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
    };
    const { skip, limit, page, sortBy, sortOrder } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    let condition = {};
    const sortCondition = {};
    if (query.search) {
        condition.title = { $regex: query.search, $options: "i" };
    }
    if (query.status) {
        condition.status = query.status;
    }
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const result = yield task_model_1.Task.find({
        $and: [{ userEmail: email }, condition],
    })
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    return {
        meta: {
            page,
            limit,
        },
        data: result,
    };
});
const updateSingleTask = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSingleTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findByIdAndDelete(id);
    return result;
});
exports.TaskService = {
    createTask,
    getTask,
    updateSingleTask,
    deleteSingleTask,
};
