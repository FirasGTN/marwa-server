const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let { userId, orderProdcutsData } = req.body;
    console.log(userId);
    console.log(orderProdcutsData);
    let userfind = await User.findOne({ _id: userId });
    if (!userfind) {
      return res
        .status(401)
        .json({ success: true, message: "User undefined." });
    }
    userfind.ordersPending.push(orderProdcutsData);
    userfind.cart = [];
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
