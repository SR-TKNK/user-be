class CategoryController {
  constructor({ categoryService }) {
    this.categoryService = categoryService;

    this.getAllCategories = this.getAllCategories.bind(this);
  }

  async getAllCategories(req, res) {
    try {
      const serviceResult = await this.categoryService.findCategories();
      if (serviceResult.failure) throw new Error(serviceResult.message);
      res.status(200).send({
        status: "success",
        length: serviceResult.categories.length,
        categories: serviceResult.categories,
      });
    } catch (err) {
      return res.status(400).send({ msg: err.message });
    }
  }
}

module.exports = CategoryController;
