const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let id = req.params;
    let existId = await Cart.findOne({ userid: id.id });
    if (existId) {
      return res.status(201).json({
        cart: existId,
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "No cart found.",
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
