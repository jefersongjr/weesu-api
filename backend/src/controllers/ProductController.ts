import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/ProductService';
import ThrowException from '../middlewares/exceptions/ThrowException';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public getProductsByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userId = parseInt(req.params.userId, 10);
      const products = await this.productService.getProductsByUserId(userId);
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, description, price, quantity, model, brand, image_url } =
        req.body;
      if (
        !name ||
        !description ||
        !price ||
        !quantity ||
        !model ||
        !brand ||
        !image_url
      ) {
        throw new ThrowException(400, 'Todos os campos devem ser preenchidos');
      }

      const product = await this.productService.createNewProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const productId = parseInt(req.params.id, 10);

      if (isNaN(productId)) {
        return res.status(400).json({ message: 'ID inválido' });
      }

      const result = await this.productService.deleteProductById(productId);

      if (result === 0) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      return res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      next(error);
    }
  };
}
