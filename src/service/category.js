module.exports = class AuthLogin {
  constructor({ categoryDaos }) {
    this.categoryDaos = categoryDaos;

    this.findCategories = this.findCategories.bind(this);
  }

  async findCategories() {
    const categories = await this.categoryDaos.findAllCategories();
    if (categories.failure) {
      return {
        failure: true,
        message: "invalid",
      };
    }
    return {
      categories: categories,
    };
  }
};
