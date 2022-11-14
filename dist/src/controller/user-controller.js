"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('user/login', {
                noti: ''
            });
        };
        this.login = async (req, res) => {
            let checkLogin = await this.userService.checkLogin(req, res);
            if (checkLogin) {
                res.redirect(301, '/products');
            }
            else {
                res.render('user/login', {
                    noti: 'Tài khoản hoặc Mật khẩu không đúng!!! Hãy nhập lại'
                });
            }
        };
        this.showFormRegister = async (req, res) => {
            res.render('user/register', {
                noti: ''
            });
        };
        this.register = async (req, res) => {
            let checkRegister = await this.userService.checkRegister(req, res);
            if (checkRegister) {
                res.render('user/register', {
                    noti: 'Tài khoản đã tồn tại!!! Hãy nhập lại'
                });
            }
            else {
                await this.userService.register(req, res);
                res.redirect(301, '/user/login');
            }
        };
        this.userService = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map