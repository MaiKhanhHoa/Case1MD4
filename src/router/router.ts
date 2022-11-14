import {Router} from "express";
import {routerProduct} from "./product-router";
import {routerUser} from "./user-router";
export const router = Router();
router.use('/products', routerProduct);
router.use('/user', routerUser);