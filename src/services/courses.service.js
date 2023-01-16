const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class coursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategory(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "videos",
            attributes: ["title", "url"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Courses.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, description) {
    try {
      const result = Courses.update({ description }, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = coursesServices;
