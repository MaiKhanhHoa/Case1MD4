import {ProductService} from "../service/product-service";
import {UserService} from "../service/user-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";

export class ProductController {
    private productService: ProductService;
    private categoryService: CategoryService;
    private userService: UserService;

    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
        this.userService = new UserService();
    }

    getAll = async (req: Request, res: Response) => {
        let status = this.userService.getStatusLogin();
        if (status) {
            let products = await this.productService.findAll(req, res)
            let categories = await this.categoryService.findAll(req, res)
            res.render('product/list', {
                listProduct: products,
                listCategory: categories
            })
        } else {
            res.redirect(301, '/user/login');
        }

    }

    findProductByCategory = async (req: Request, res: Response) => {
        let products = await this.productService.findProductByCategory(req, res)
        let categories = await this.categoryService.findAll(req, res)
        res.render('product/list', {
            listProduct: products,
            listCategory: categories
        })
    }

    findProductByNameAndCategory = async (req: Request, res: Response) => {
        let products = await this.productService.findProductByNameAndCategory(req, res)
        let categories = await this.categoryService.findAll(req, res)
        res.render('product/list', {
            listProduct: products,
            listCategory: categories
        })
    }

    findProductByName = async (req: Request, res: Response) => {
        let product = await this.productService.findProductByName(req, res)
        let categories = await this.categoryService.findAll(req, res)
        res.render('product/list', {
            listProduct: product,
            listCategory: categories
        })
    }

    showFormCreate = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll(req, res)
        res.render('product/create', {
            listCategory: categories
        })
    }

    createProduct = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res);
    }

    showFormEdit = async (req: Request, res: Response) => {
        let product = await this.productService.findProductById(req, res);
        let categories = await this.categoryService.findAll(req, res);
        res.render('product/edit', {
            listCategory: categories,
            product: product
        });
    }

    editProduct = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res);
    }

    deleteProduct = async (req: Request, res: Response) => {
        await this.productService.deleteProduct(req, res);
        res.redirect(301, '/products');
    }

    showDetailProduct = async (req: Request, res: Response) => {
        let product = await this.productService.findProductById(req, res);
        let categories = await this.categoryService.findAll(req, res);
        res.render('product/detail', {
            listCategory: categories,
            listProduct: product
        });
    }
}

export default new ProductController();