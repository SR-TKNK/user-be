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
      let products = [];
      const result = await this.productModel.find({});
      result.map((product) => {
        products.push({
          code: product.code,
          name: product.name,
          price: product.price,
        });
      });
      return products;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }

  async findOneProduct(value) {
    try {
      const result = await this.productModel.findOne({ code: value });
      return result;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }

  async findAllProductByName(queries) {
    try {
      // const result = await this.productModel.find({ name: value });
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
