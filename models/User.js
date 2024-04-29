const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "the field of First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "the field of Last name is required"],
  },
  email: {
    type: String,
    required: [true, "the field of email is required"],
    match: [
      /^\S+@\S+\.\S+$/,
      "Invalid email format. Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
    required: [true, "the field of password is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    ],
  },
  address: {
    type: Object,
    required: [true, "the field of address is required"],
  },
  cart: {
    type: Array,
    default: [],
  },
  ordersActive: {
    type: Array,
    default: [],
  },
  ordersPending: {
    type: Array,
    default: [],
  },
  ordersComplete: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    default: "user",
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("User", userSchema);
