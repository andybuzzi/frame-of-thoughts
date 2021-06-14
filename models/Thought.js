const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Text is Required",
    minLength: 1,
    maxLength: 180,
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
const Thoughts = model("Thoughts", thoughtsSchema);

// export the Pizza model
module.exports = Thoughts;
