const coursesServices = require("../services/courses.service");

const getAllCourses = async (req, res) => {
  try {
    const result = await coursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await coursesServices.getWithCategory(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const postCourse = async (req, res) => {
  try {
    const user = req.body;
    const result = await coursesServices.create(user);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
//description
const putCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const {description}  = req.body;
    const result = await coursesServices.update(id, description);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourses,
  getWithCategories,
  postCourse,
  putCourse,
};
