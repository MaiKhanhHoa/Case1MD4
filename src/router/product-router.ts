import {Router} from "express";
import productController from "../controller/product-controller";

export const routerProduct = Router();
routerProduct.get('/', productController.getAll);
routerProduct.get('/create', productController.showFormCreate);
routerProduct.post('/create', productController.createProduct);
routerProduct.get('/edit/:id', productController.showFormEdit);
routerProduct.post('/edit/:id', productController.editProduct);
routerProduct.post('/delete/:id', productController.deleteProduct);
routerProduct.post('/', productController.findProductByName);
routerProduct.get('/category/:id', productController.findProductByCategory);
routerProduct.post('/category/:id', productController.findProductByNameAndCategory);
routerProduct.get('/detail/:id', productController.showDetailProduct);
