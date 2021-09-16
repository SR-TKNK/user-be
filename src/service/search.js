module.exports = class Search {
  constructor({ productDaos }) {
    this.productDaos = productDaos;

    this.execute = this.execute.bind(this);
  }

  async execute(params) {
    try {
      const queryString = params;
      const queries = queryString.split("%20");
      console.log(queries);
      const products = await this.productDaos.findAllProductByName(queries);
      return products;
    } catch (e) {
      return {
        failure: true,
        message: e.message,
      };
    }
  }
};
