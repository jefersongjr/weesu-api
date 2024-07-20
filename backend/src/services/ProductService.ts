import Product from '../database/models/ProductModel';
import ThrowException from '../middlewares/exceptions/ThrowException';

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

  public createNewProduct = async (product: Product) => {
    const { name } = product;
    const products = await Product.findAll();
    const validate1 = products.some((product) => product.name === name);
    if (validate1) {
      throw new ThrowException(409, 'Usuário já existe');
    }

    const newProduct = await Product.create({ ...product });

    return newProduct;
  };
}
