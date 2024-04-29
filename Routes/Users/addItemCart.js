const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let { userid, product } = req.body;
    let userfind = await User.findOne({ _id: userid });
    if (!userfind) {
      return res
        .status(401)
        .json({ success: true, message: "User undefined." });
    }
    userfind.cart.push(product);
    await userfind.save();
    return res
      .status(201)
      .json({ success: true, message: "Item added successfully." });
  } catch (error) {
    if (error) {
      return res.status(401).json({
        success: false,
        message: "failed for some reason try change the username and try again",
      });
    }
  }
};
