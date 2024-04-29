const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ data });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
