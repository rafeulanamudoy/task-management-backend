"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const duplicateEntryError = (error) => {
    const errors = [
        {
            path: "",
            message: error.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Email is already taken",
        errorMessages: errors,
    };
};
exports.default = duplicateEntryError;
