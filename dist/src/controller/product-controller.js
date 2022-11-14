"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const user_service_1 = require("../service/user-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let status = this.userService.getStatusLogin();
            if (status) {
                let products = await this.productService.findAll(req, res);
                let categories = await this.categoryService.findAll(req, res);
                res.render('product/list', {
                    listProduct: products,
                    listCategory: categories
                });
            }
            else {
                res.redirect(301, '/user/login');
            }
        };
        this.findProductByCategory = async (req, res) => {
            let products = await this.productService.findProductByCategory(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/list', {
                listProduct: products,
                listCategory: categories
            });
        };
        this.findProductByNameAndCategory = async (req, res) => {
            let products = await this.productService.findProductByNameAndCategory(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/list', {
                listProduct: products,
                listCategory: categories
            });
        };
        this.findProductByName = async (req, res) => {
            let product = await this.productService.findProductByName(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/list', {
                listProduct: product,
                listCategory: categories
            });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/create', {
                listCategory: categories
            });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            let product = await this.productService.findProductById(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/edit', {
                listCategory: categories,
                product: product
            });
        };
        this.editProduct = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.deleteProduct(req, res);
            res.redirect(301, '/products');
        };
        this.showDetailProduct = async (req, res) => {
            let product = await this.productService.findProductById(req, res);
            let categories = await this.categoryService.findAll(req, res);
            res.render('product/detail', {
                listCategory: categories,
                listProduct: product
            });
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
        this.userService = new user_service_1.UserService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map