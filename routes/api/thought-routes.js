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
router.route("/").get(getAllThought);

// Set up GET one and PUT at /api/pizzas/:id
// /api/pizzas/:id
router.route("/:id").get(getThoughtById).put(updateThought);

// /api/thoughts/<pizzaId>
router.route("/:userId").post(createThought);

// /api/thoughts/<pizzaId>/<commentId>
router.route("/:userId/:userId").delete(deleteThought);

module.exports = router;
