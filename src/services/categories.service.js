const Categories = require("../models/categories.models");

class categorieServices {
  static async create(categorie) {
    try {
      const result = Categories.create(categorie);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = categorieServices;
