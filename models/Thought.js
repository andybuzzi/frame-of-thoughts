const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Text is Required",
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: "Username is Required",
  },
});

// create the Pizza model using the PizzaSchema
const Thought = model("Thought", thoughtSchema);

// export the Pizza model
module.exports = Thought;
