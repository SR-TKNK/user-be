class categoryDaos {
  constructor({ categoryModel }) {
    this.categoryModel = categoryModel;

    this.findAllCategories = this.findAllCategories.bind(this);
  }

  async findAllCategories() {
    const result = await this.categoryModel.find({});
    console.log(result);
    return result;
  }
}

module.exports = categoryDaos;
