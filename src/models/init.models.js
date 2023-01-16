const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UserCourses = require("./userCourses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");

const initModels = () => {
  UserCourses.belongsTo(Users, { as: "users", foreignKey: "user_id" });
  Users.hasMany(UserCourses, { as: "courses", foreignKey: "user_id" });

  UserCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UserCourses, { as: "user", foreignKey: "course_id" });

  Categories.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Categories, { as: "categories", foreignKey: "course_id" });

  Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "videos", foreignKey: "course_id" });
};

module.exports = initModels;
