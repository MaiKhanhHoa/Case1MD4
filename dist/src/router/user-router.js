"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.routerUser = (0, express_1.Router)();
exports.routerUser.get('/login', user_controller_1.default.showFormLogin);
exports.routerUser.post('/login', user_controller_1.default.login);
exports.routerUser.get('/register', user_controller_1.default.showFormRegister);
exports.routerUser.post('/register', user_controller_1.default.register);
//# sourceMappingURL=user-router.js.map