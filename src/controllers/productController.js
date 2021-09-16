class ProductController {
  constructor({ productDaos }) {
    this.productDaos = productDaos;

    this.getAllProduct = this.getAllProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    // this.getProductDetail = this.getProductDetail.bind(this);
  }

  async getAllProduct(req, res) {
    try {
      const products = await this.productDaos.findAllProducts();
      res.json({
        status: "success",
        length: products.length,
        products: products,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  async getProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productDaos.findOneProduct(id);
      res.json({
        status: "success",
        product: product,
      });
    } catch (err) {
      return res.status(569).json({ msg: err.message });
    }
  }

  // async getProductDetail(req, res) {}
}

module.exports = ProductController;
