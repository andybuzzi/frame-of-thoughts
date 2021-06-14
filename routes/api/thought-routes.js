const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/pizzas
// /api/pizzas
router.route("/").get(getAllThought).post(createThought);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
// /api/pizzas/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
