"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    modelName: 'Product',
    tableName: 'products',
    sequelize: _1.default,
    underscored: false,
    timestamps: true,
});
exports.default = Product;
//# sourceMappingURL=ProductModel.js.map