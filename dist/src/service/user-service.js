"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
let statusLogin = false;
class UserService {
    constructor() {
        this.findAll = async (req, res) => {
            let users = await this.userRepository.query(`select * from user`);
            return users;
        };
        this.checkLogin = async (req, res) => {
            let users = await this.userRepository.query(`select * from user`);
            let check = false;
            let user = req.body;
            for (let i = 0; i < users.length; i++) {
                if (user.nameU === users[i].nameU && user.password === users[i].password) {
                    statusLogin = true;
                    check = true;
                    break;
                }
                else {
                    check = false;
                }
            }
            return check;
        };
        this.checkRegister = async (req, res) => {
            let users = await this.userRepository.query(`select * from user`);
            let user = req.body;
            let check = false;
            for (let i = 0; i < users.length; i++) {
                if (user.nameU === users[i].nameU) {
                    check = true;
                    break;
                }
                else {
                    check = false;
                }
            }
            return check;
        };
        this.register = async (req, res) => {
            let user = req.body;
            await this.userRepository.save(user);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        });
    }
    getStatusLogin() {
        return statusLogin;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map