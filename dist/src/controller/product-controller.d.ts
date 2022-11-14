import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    private categoryService;
    private userService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    findProductByCategory: (req: Request, res: Response) => Promise<void>;
    findProductByNameAndCategory: (req: Request, res: Response) => Promise<void>;
    findProductByName: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    showDetailProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
