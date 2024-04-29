const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let { deleteProductId } = req.params;
    const newproduct = await Product.findOneAndDelete({
      name: deleteProductId,
    });
    if (!newproduct) {
      res.status(200).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product has been deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
