const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  gender: { type: String, required: true },
  type: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  colors: { type: Array, required: true },
  sizes: { type: Array, required: true },
});

module.exports = Product = mongoose.model("Product", productSchema);
