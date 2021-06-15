const { Schema, model } = require("mongoose");

const validateEmail = function (email) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username is Required",
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Email is Required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the Pizza model using the PizzaSchema
const User = model("User", userSchema);

// export the Pizza model
module.exports = User;
