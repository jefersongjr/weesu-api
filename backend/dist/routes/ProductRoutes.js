"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
const productController = new ProductController_1.ProductController();
productRouter.get('/products/:userId', productController.getProductsByUserId);
productRouter.post('/products', productController.createProduct);
productRouter.put('/products/:id', productController.updateProduct);
productRouter.delete('/products/:id', productController.deleteProduct);
//# sourceMappingURL=ProductRoutes.js.map