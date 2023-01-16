const userServices = require("../services/users.service");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userServices.getWithCourses(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const postUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await userServices.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {firstName,lastName,password} = req.body
    const field = {firstName,lastName,password}
    const result = await userServices.update(id, field);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const  {courseId}  = req.body;
    const result = await userServices.addCourse(id, courseId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getUserById,
  getUserWithCourses,
  postUser,
  putUser,
  addCourse
};
