class CategoryController {
  constructor({ categoryDaos }) {
    this.categoryDaos = categoryDaos;

    this.getAllCategories = this.getAllCategories.bind(this);
  }

  async getAllCategories(req, res) {
    try {
      const categories = await this.categoryDaos.findAllCategories();
      res.json({
        status: "success",
        length: categories.length,
        categories: categories,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
}

module.exports = CategoryController;
