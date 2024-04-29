const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let product = await Product.find();
    return res.status(201).json({
      product
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
