const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const UserCourses = db.define("user_courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      model: Users,
      key: "id",
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
    references: {
      model: Courses,
      key: "id",
    },
  },
});

module.exports = UserCourses;
