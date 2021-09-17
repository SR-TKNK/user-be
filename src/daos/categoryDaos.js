class categoryDaos {
  constructor({ categoryModel }) {
    this.categoryModel = categoryModel;

    this.findAllCategories = this.findAllCategories.bind(this);
  }

  async findAllCategories() {
    try {
      const result = await this.categoryModel.find({});
      return result;
    } catch (err) {
      return { failure: true, message: err.message };
    }
  }
}

module.exports = categoryDaos;
