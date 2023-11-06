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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const auth_model_1 = require("./auth.model");
const handleApiError_1 = __importDefault(require("../../errors/handleApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = (yield auth_model_1.User.create(user)).toObject();
    return createUser;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUserExist = yield auth_model_1.User.isUserExist(email);
    if (!isUserExist) {
        throw new handleApiError_1.default(http_status_1.default.NOT_FOUND, "User Doesn,t Exist");
    }
    if (isUserExist.password &&
        !(yield auth_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new handleApiError_1.default(http_status_1.default.UNAUTHORIZED, "Password is incorrect");
    }
    const { _id, email: userEmail } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ _id, userEmail }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ _id, userEmail }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        email: userEmail,
    };
});
exports.UserService = {
    createUser,
    loginUser,
};
