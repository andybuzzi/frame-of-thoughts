const { Schema, model } = require("mongoose");

var validateEmail = function (email) {
  var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return re.test(email);
};

const userSchema = new Schema({
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
});

// create the Pizza model using the PizzaSchema
const User = model("User", userSchema);

// export the Pizza model
module.exports = User;
