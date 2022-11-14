"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC`);
            return products;
        };
        this.findProductById = async (req, res) => {
            let idFind = req.params.id;
            let product = await this.productRepository.query(`select * from product join category on idCategory = category.idC where product.id = ${idFind}`);
            return product;
        };
        this.findProductByNameAndCategory = async (req, res) => {
            let idFind = req.params.id;
            let nameFind = req.body.name;
            let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC where product.idCategory = ${idFind} AND product.name like '%${nameFind}%'`);
            return products;
        };
        this.findProductByCategory = async (req, res) => {
            let idFind = req.params.id;
            let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC where idC = ${idFind}`);
            return products;
        };
        this.findProductByName = async (req, res) => {
            let nameFind = req.body.name;
            let product = await this.productRepository.query(`select * from product join category on idCategory = idC where product.name like '%${nameFind}%'`);
            return product;
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            let idEdit = req.params.id;
            if (files != null) {
                let newProduct = req.body;
                console.log(newProduct);
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                newProduct.image = 'storage/' + image.name;
                await this.productRepository.update({ id: idEdit }, newProduct);
                res.redirect(301, '/products');
            }
        };
        this.deleteProduct = async (req, res) => {
            let idDelete = req.params.id;
            await this.productRepository.delete(idDelete);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success');
            this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map