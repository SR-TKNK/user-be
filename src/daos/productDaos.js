class productDaos {
  constructor({ productModel }) {
    this.productModel = productModel;

    this.findAllProducts = this.findAllProducts.bind(this);
    this.findOneProduct = this.findOneProduct.bind(this);
    this.findAllProductByName = this.findAllProductByName.bind(this);
    this.findAllProductByCategory = this.findAllProductByCategory.bind(this);
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

  async findAllProductByName(queries) {
    try {
      const products = await this.productModel
        .find({ name: { $in: queries } })
        .select("code name price");
      return products;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }

  async findAllProductByCategory(value) {
    try {
      const result = await this.productModel.find({ category: value });
      return result;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }
}

module.exports = productDaos;
