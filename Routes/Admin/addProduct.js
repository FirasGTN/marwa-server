const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let { name, price, gender, type, imageSrc, imageAlt, colors ,sizes } = req.body;
    const newProd = new Product({
      name,
      price,
      gender,
      type,
      imageSrc,
      imageAlt,
      colors,
      sizes,
    });
    await newProd.save();
    return res.status(201).json({
      message: "Product added with successfully.",
    });
  } catch (error) {
    throw error;
  }
};
