import { Request, Response } from "express";
export declare class CategoryService {
    private categoryRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
