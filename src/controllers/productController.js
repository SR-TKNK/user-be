class ProductController {
  constructor({ productService, searchService }) {
    this.productService = productService;
    this.searchService = searchService;

    this.getAllProduct = this.getAllProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    // this.getProductDetail = this.getProductDetail.bind(this);

    this.getProductByName = this.getProductByName.bind(this);
    // this.getProductByCategory = this.getProductByCategory.bind(this);
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

  async getProductByName(req, res) {
    try {
      const query = req.params.id;
      const serviceResult = await this.searchService.findByName(query);
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        products: serviceResult.products,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }

  // async getProductByCategory(req, res) {
  //   try {
  //     // The query must have form %20
  //     const queries = req.params.cq;
  //     let result = [];
  //     for (q in queries) {
  //       const product = await this.productDaos.findAllProductByCategory(q);
  //       result.append(product);
  //     }
  //     let new_result = [...new Set(result)];
  //     res.json({
  //       status: "success",
  //       product: new_result,
  //     });
  //   } catch (err) {
  //     return res.status(569).json({ msg: err.message });
  //   }
  // }

  // async getProductDetail(req, res) {}
}

module.exports = ProductController;
