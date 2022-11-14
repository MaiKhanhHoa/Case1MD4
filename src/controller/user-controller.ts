import {Request, Response} from "express";
import {UserService} from "../service/user-service";
import {ProductService} from "../service/product-service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    showFormLogin = async (req: Request, res: Response) => {
        res.render('user/login', {
            noti: ''
        })
    }

    login = async (req: Request, res: Response) => {
        let checkLogin = await this.userService.checkLogin(req, res);
        if (checkLogin) {
            res.redirect(301, '/products');
        } else {
            res.render('user/login', {
                noti: 'Tài khoản hoặc Mật khẩu không đúng!!! Hãy nhập lại'
            });
        }
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('user/register', {
            noti: ''
        })
    }

    register = async (req: Request, res: Response) => {
        let checkRegister = await this.userService.checkRegister(req, res);
        if (checkRegister) {
            res.render('user/register', {
                noti: 'Tài khoản đã tồn tại!!! Hãy nhập lại'
            })
        } else {
            await this.userService.register(req, res);
            res.redirect(301, '/user/login');
        }
    }
}

export default new UserController();