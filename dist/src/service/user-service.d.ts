import { Request, Response } from "express";
export declare class UserService {
    private userRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    getStatusLogin(): boolean;
    checkLogin: (req: Request, res: Response) => Promise<boolean>;
    checkRegister: (req: Request, res: Response) => Promise<boolean>;
    register: (req: Request, res: Response) => Promise<void>;
}
