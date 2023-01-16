const categorieServices = require("../services/categories.service");

const postCategorie = async (req, res) => {
  try {
    const categorie = req.body;
    const result = await categorieServices.create(categorie);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categorieServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  postCategorie,
  deleteCategorie,
};
