const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
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
const Thought = model("Thought", ThoughtSchema);

// export the Pizza model
module.exports = Thought;
