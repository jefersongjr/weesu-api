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
      throw new ThrowException(409, 'Produto já cadastrado');
    }

    const newProduct = await Product.create({ ...product });

    return newProduct;
  };

  public deleteProductById = async (id: number) => {
    try {
      const result = await Product.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw new Error(`Não foi possível apagar o produto`);
    }
  };

  public async updateProductById(id: number, product: Product) {
    try {
      const [updated] = await Product.update(product, {
        where: { id },
      });

      if (updated === 0) {
        return null;
      }

      return Product.findByPk(id);
    } catch (error) {
      throw new Error(`Não foi possível atualizar o produto com ID ${id}`);
    }
  }
}
