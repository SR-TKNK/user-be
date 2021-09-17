module.exports = class Search {
  constructor({ productDaos }) {
    this.productDaos = productDaos;

    this.findByName = this.findByName.bind(this);
  }

  async findByName(params) {
    const queryString = params;
    const queries = queryString.split("%20");
    console.log(queries);
    const products = await this.productDaos.findAllProductByName(queries);
    if (products.failure) {
      return {
        failure: true,
        message: "Cannot get any products",
      };
    }
    if (products.length === 0) {
      return {
        failure: true,
        message: "Cannot get any products",
      };
    }
    return { products: products };
  }
};
