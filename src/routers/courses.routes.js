const { Router } = require("express");
const router = Router();
const {
  getAllCourses,
  getWithCategories,
  postCourse,
  putCourse,
} = require("../controllers/courses.controller");
module.exports = router;

router.get("/courses", getAllCourses);
router.get("/courses/:id", getWithCategories);
router.post("/courses", postCourse);
router.put("/courses/:id", putCourse);
