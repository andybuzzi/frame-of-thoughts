const { ObjectId } = require("bson");
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: [
      {
        type: Schema.Types.ObjectId,
        default: new ObjectId(),
      },
    ],
    reactionBody: {
      type: String,
      required: "Text is Required",
      minLength: 1,
      maxLength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: "Username is Required",
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// create the Pizza model using the PizzaSchema
const Reaction = model("Reaction", ReactionSchema);

// export the Pizza model
module.exports = Reaction;
