class ProductController {
  constructor({ productDaos, }) {
    this.productDaos = productDaos;

    this.getAllProduct = this.getAllProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getProductByName = this.getProductByName(this);
    this.getProductByCategory = this.getProductByCategory(this);
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

  async getProductByName(req, res) {
    try {
      
    } catch (err) {
      return res.status(569).json({ msg: err.message });
    }
  }

  async getProductByCategory(req, res) {
    try {
      // The query must have form %20
      const queries = req.params.cq;
      let result = [];
      for (q in queries) {
        const product = await this.productDaos.findAllProductByCategory(q);
        result.append(product);
      }
      let new_result = [...new Set(result)];
      res.json({
        status: "success",
        product: new_result,
      });
    } catch (err) {
      return res.status(569).json({ msg: err.message });
    }
  }

  // async getProductDetail(req, res) {}
}

module.exports = ProductController;
