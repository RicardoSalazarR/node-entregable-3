const { Router } = require("express");
const router = Router();
const {
  getUserById,
  getUserWithCourses,
  postUser,
  putUser,
  addCourse,
} = require("../controllers/users.controller");

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserWithCourses);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.post("/users/:id/courses/add", addCourse);

module.exports = router;
