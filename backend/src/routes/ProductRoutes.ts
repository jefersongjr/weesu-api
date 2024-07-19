import { Router } from 'express';
import { ProductController } from '../controllers/UserController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/products', productController.getProductsByUserId);

export { productRouter };
