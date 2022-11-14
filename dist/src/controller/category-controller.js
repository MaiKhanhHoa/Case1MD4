"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../service/category-service");
class CategoryController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await this.categoryService.findAll(req, res);
            console.log({ categories });
            res.render('product/create', {
                listCategory: categories
            });
        };
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map