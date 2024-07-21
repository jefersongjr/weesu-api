"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
class ProductController {
    constructor() {
        this.getProductsByUserId = async (req, res, next) => {
            try {
                const userId = parseInt(req.params.userId, 10);
                const products = await this.productService.getProductsByUserId(userId);
                res.json(products);
            }
            catch (error) {
                next(error);
            }
        };
        this.createProduct = async (req, res, next) => {
            try {
                const { name, description, price, quantity, model, brand, image_url } = req.body;
                if (!name ||
                    !description ||
                    !price ||
                    !quantity ||
                    !model ||
                    !brand ||
                    !image_url) {
                    throw new ThrowException_1.default(400, 'Todos os campos devem ser preenchidos');
                }
                const product = await this.productService.createNewProduct(req.body);
                return res.status(201).json(product);
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProduct = async (req, res, next) => {
            try {
                const productId = parseInt(req.params.id, 10);
                if (isNaN(productId)) {
                    return res.status(400).json({ message: 'ID inválido' });
                }
                const result = await this.productService.deleteProductById(productId);
                if (result === 0) {
                    throw new ThrowException_1.default(404, 'Produto não encontrado');
                }
                return res.status(200).json({ message: 'Produto deletado com sucesso' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProduct = async (req, res, next) => {
            try {
                const productId = parseInt(req.params.id, 10);
                if (isNaN(productId)) {
                    throw new ThrowException_1.default(400, 'ID inválido');
                }
                const { name, description, price, quantity, model, brand, image_url } = req.body;
                if (!name ||
                    !description ||
                    !price ||
                    !quantity ||
                    !model ||
                    !brand ||
                    !image_url) {
                    throw new ThrowException_1.default(400, 'Todos os campos devem ser preenchidos');
                }
                const updatedProduct = await this.productService.updateProductById(productId, req.body);
                // if (!updatedProduct) {
                //   return res.status(404).json({ message: 'Produto não encontrado' });
                // }
                return res.status(200).json(updatedProduct);
            }
            catch (error) {
                next(error);
            }
        };
        this.productService = new ProductService_1.ProductService();
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map