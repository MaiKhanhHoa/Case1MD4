import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    findProductById: (req: Request, res: Response) => Promise<any>;
    findProductByNameAndCategory: (req: Request, res: Response) => Promise<any>;
    findProductByCategory: (req: Request, res: Response) => Promise<any>;
    findProductByName: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
