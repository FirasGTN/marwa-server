const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    const { userBan } = req.body;
    const bannedUser = await User.findOneAndUpdate(
      { _id: userBan },
      {
        $set: {
          isBanned: true,
        },
      },
      { new: true }
    );
    console.log(req.body);
    res
      .status(200)
      .json({ data: "User was banned seccessfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
