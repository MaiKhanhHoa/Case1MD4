import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import fileUpload, {UploadedFile} from "express-fileupload";

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect Database Success');
            this.productRepository = AppDataSource.getRepository(Product);
        })
    }

    findAll = async (req: Request, res: Response) => {
        let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC`);
        return products;
    }

    findProductById = async (req: Request, res: Response) => {
        let idFind = req.params.id;
        let product = await this.productRepository.query(`select * from product join category on idCategory = category.idC where product.id = ${idFind}`);
        return product;
    }

    findProductByNameAndCategory = async (req: Request, res: Response) => {
        let idFind = req.params.id;
        let nameFind = req.body.name;
        let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC where product.idCategory = ${idFind} AND product.name like '%${nameFind}%'`);
        return products;
    }

    findProductByCategory = async (req: Request, res: Response) => {
        let idFind = req.params.id;
        let products = await this.productRepository.query(`select * from product join category on idCategory = category.idC where idC = ${idFind}`);
        return products;
    }

    findProductByName = async (req: Request, res: Response) => {
        let nameFind = req.body.name;
        let product = await this.productRepository.query(`select * from product join category on idCategory = idC where product.name like '%${nameFind}%'`);
        return product;
    }

    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let product = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.save(product);
            res.redirect(301, '/products');
        }
    }

    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        let idEdit = req.params.id;
        if (files != null) {
            let newProduct = req.body;
            console.log(newProduct)
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            newProduct.image = 'storage/' + image.name;
            await this.productRepository.update({id: idEdit}, newProduct);
            res.redirect(301, '/products');
        }
    }

    deleteProduct = async (req: Request, res: Response) => {
        let idDelete = req.params.id;
        await this.productRepository.delete(idDelete);
    }
}