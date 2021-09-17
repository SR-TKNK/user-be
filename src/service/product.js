module.exports = class ProductService {
  constructor({ productDaos }) {
    this.productDaos = productDaos;

    this.getProducts = this.getProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  async getProducts() {
    const products = await this.productDaos.findAllProducts();
    if (products.failure) {
      return {
        failure: true,
        message: "Cannot get any products",
      };
    }
    return {
      products: products,
    };
  }

  async getProduct(ID) {
    const product = await this.productDaos.findOneProduct({ code: ID });
    if (product.failure) {
      return {
        failure: true,
        message: "Cannot find this product",
      };
    }
    return {
      product: product,
    };
  }
};
