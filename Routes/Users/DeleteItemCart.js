const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    const { id, prodId } = req.body;

    const cart = await Cart.findOne({ _id: id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.product.findIndex(
      (product) => product._id === prodId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in the cart" });
    }

    cart.product.splice(productIndex, 1);

    await cart.save();

    return res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
