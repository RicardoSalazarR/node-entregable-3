const { Router } = require("express");
const router = Router();
const {
  postCategorie,
  deleteCategorie,
} = require("../controllers/categories.controller");

router.post("/categories", postCategorie);
router.delete("/categories/:id", deleteCategorie);

module.exports = router;
