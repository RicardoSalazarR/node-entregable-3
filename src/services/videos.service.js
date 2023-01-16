const { where } = require("sequelize");
const Videos = require("../models/videos.models");

class videoServices {
  static async create(video) {
    try {
      const result = Videos.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Videos.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = videoServices;
