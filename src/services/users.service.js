const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");

class userServices {
  static async getById(id) {
    try {
      const result = Users.findOne({
        where: { id },
        attributes: {
          exclude: "createdAt, updatedAt, password",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = Users.findOne({
        where: { id },
        attributes: {
          exclude: "createdAt, updatedAt, password",
        },
        include: {
          model: UserCourses,
          as: "courses",
          attributes: ["courseId"],
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addCourse(id, courseId) {
    try {
      const result = UserCourses.create({ userId: id, courseId });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userServices;
