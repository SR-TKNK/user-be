class ProductController {
  constructor({ productService, searchByNameService }) {
    this.productService = productService;
    this.searchByNameService = searchByNameService;

    this.getAllProduct = this.getAllProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.searchProductByName = this.searchProductByName.bind(this);
  }

  async getAllProduct(req, res) {
    try {
      const serviceResult = await this.productService.getProducts();
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        length: serviceResult.products.length,
        products: serviceResult.products,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }

  async getProduct(req, res) {
    try {
      const id = req.params.id;
      const serviceResult = await this.productService.getProduct(id);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        product: serviceResult.product,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }

  async searchProductByName(req, res) {
    try {
      const params = { ...req.query };
      const serviceResult = await this.searchByNameService.execute(params);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        products: serviceResult.products,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }
}

module.exports = ProductController;
