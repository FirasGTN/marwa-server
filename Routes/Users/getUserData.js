const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.params.userID });
    let userFilter = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      cart: userData.cart,
      orders: userData.orders,
    };
    return res.status(201).json({
      userFilter,
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
