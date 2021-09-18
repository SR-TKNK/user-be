class productDaos {
  constructor({ productModel }) {
    this.productModel = productModel;

    this.findAllProducts = this.findAllProducts.bind(this);
    this.findOneProduct = this.findOneProduct.bind(this);
    this.searchAllProductByName = this.searchAllProductByName.bind(this);
  }

  async findAllProducts() {
    try {
      const products = await this.productModel
        .find({})
        .select("code name price");
      return products;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }

  async findOneProduct(value) {
    try {
      const product = await this.productModel.findOne({ code: value });
      return product;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }

  async searchAllProductByName(param) {
    try {
      const products = await this.productModel
        .find({ name: new RegExp('.*' + param + '.*') })
        .select("code name price");
      return { products };
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }
}

module.exports = productDaos;
