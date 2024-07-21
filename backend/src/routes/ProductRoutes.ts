import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/products/:userId', productController.getProductsByUserId);
productRouter.post('/products', productController.createProduct);
productRouter.put('/products/:id', productController.updateProduct);
productRouter.delete('/products/:id', productController.deleteProduct);

export { productRouter };
