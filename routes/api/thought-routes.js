const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/pizzas
// /api/users
router.route("/").get(getAllThought);

// Set up GET one and PUT at /api/pizzas/:id
// /api/users/:id
router.route("/:id").get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// /api/thoughts/<userId>/<thoughtId>
router.route(":thoughtId").delete(deleteThought);

//  /api/thoughts/:userId/:thoughtId/:reactionId'
router.route("/:thoughtId/:reactionId").delete(removeReaction);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/:reactions").put(addReaction);

module.exports = router;
