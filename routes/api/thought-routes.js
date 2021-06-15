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

// Set up GET all and POST at /api/thoughts
// /api/thoughts
router.route("/").get(getAllThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// /api/thoughts/<thoughtId>
// router.route("/:thoughtId").delete(deleteThought);

//  /api/thoughts/:userId/:thoughtId/:reactionId'
router.route("/:thoughtId/:reactionId").delete(removeReaction);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/:reactions").put(addReaction);

module.exports = router;
