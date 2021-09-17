class SearchByName {
  constructor({ productDaos }) {
    this.productDaos = productDaos;

    this.execute = this.execute.bind(this);
  }

  async execute(params) {
    try {
      const name = params.name;
      const daosResult = await this.productDaos.searchAllProductByName(name);
      if (daosResult.failure || !daosResult.products.length) throw new Error(daosResult.message || "Cannot get any products you search");
      return daosResult;
    } catch (error) {
      return { failure: true, message: error.message };
    }
  }
}

module.exports = SearchByName;