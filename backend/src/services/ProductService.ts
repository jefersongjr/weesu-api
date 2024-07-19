import Product from '../database/models/ProductModel';

export class ProductService {
  public async getProductsByUserId(userId: number) {
    try {
      const products = await Product.findAll({
        where: { user_id: userId },
      });
      return products;
    } catch (error) {
      throw new Error(
        `Não foi possível obter os produtos do usuário ${userId}`,
      );
    }
  }
}
