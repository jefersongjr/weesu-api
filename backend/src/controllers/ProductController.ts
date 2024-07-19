import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/ProductService';

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
}
