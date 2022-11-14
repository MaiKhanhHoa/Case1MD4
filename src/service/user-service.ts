import {AppDataSource} from "../data-source";
import {User} from "../model/user";
import {Request, Response} from "express";
import fileUpload, {UploadedFile} from "express-fileupload";

let statusLogin = false;

export class UserService {
    private userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.userRepository = AppDataSource.getRepository(User);
        })
    }

    findAll = async (req: Request, res: Response) => {
        let users = await this.userRepository.query(`select * from user`);
        return users;
    }

    getStatusLogin() {
        return statusLogin;
    }

    checkLogin = async (req: Request, res: Response) => {
        let users = await this.userRepository.query(`select * from user`);
        let check = false;
        let user = req.body;
        for (let i = 0; i < users.length; i++) {
            if (user.nameU === users[i].nameU && user.password === users[i].password) {
                statusLogin = true;
                check = true;
                break;
            } else {
                check = false;
            }
        }
        return check;
    }

    checkRegister = async (req: Request, res: Response) => {
        let users = await this.userRepository.query(`select * from user`);
        let user = req.body;
        let check = false;
        for (let i = 0; i < users.length; i++) {
            if (user.nameU === users[i].nameU) {
                check = true;
                break;
            } else {
                check = false;
            }
        }
        return check;
    }

    register = async (req: Request, res: Response) => {
        let user = req.body;
        await this.userRepository.save(user);
    }

}