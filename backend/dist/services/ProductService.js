"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
class ProductService {
    constructor() {
        this.createNewProduct = async (product) => {
            const { name } = product;
            const products = await ProductModel_1.default.findAll();
            const validate1 = products.some((product) => product.name === name);
            if (validate1) {
                throw new ThrowException_1.default(409, 'Usuário já existe');
            }
            const newProduct = await ProductModel_1.default.create({ ...product });
            return newProduct;
        };
        this.deleteProductById = async (id) => {
            try {
                const result = await ProductModel_1.default.destroy({
                    where: { id },
                });
                return result;
            }
            catch (error) {
                throw new Error(`Não foi possível apagar o produto`);
            }
        };
    }
    async getProductsByUserId(userId) {
        try {
            const products = await ProductModel_1.default.findAll({
                where: { user_id: userId },
            });
            return products;
        }
        catch (error) {
            throw new Error(`Não foi possível obter os produtos do usuário ${userId}`);
        }
    }
    async updateProductById(id, product) {
        try {
            const [updated] = await ProductModel_1.default.update(product, {
                where: { id },
            });
            if (updated === 0) {
                return null;
            }
            return ProductModel_1.default.findByPk(id);
        }
        catch (error) {
            throw new Error(`Não foi possível atualizar o produto com ID ${id}`);
        }
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map