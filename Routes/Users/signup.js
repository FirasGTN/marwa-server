const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ element: "email", message: "Email already exists" });
    }
    if (
      req.body.password.length < 8 ||
      !/[a-z]/.test(req.body.password) ||
      !/[A-Z]/.test(req.body.password)
    ) {
      return res.status(400).json({
        element: "password",
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res
      .status(201)
      .json({ token, user: { id: newUser._id, email: newUser.email } });
  } catch (error) {
    if (error.errors.firstName) {
      return res.status(401).json({
        success: false,
        message: error.errors.firstName.message,
        element: "firstName",
      });
    } else if (error.errors.lastName) {
      return res.status(401).json({
        success: false,
        message: error.errors.lastName.message,
        element: "lastName",
      });
    } else if (error.errors.email) {
      return res.status(401).json({
        success: false,
        message: error.errors.email.message,
        element: "email",
      });
    } else if (error.errors.password) {
      return res.status(401).json({
        success: false,
        message: error.errors.password.message,
        element: "password",
      });
    } else if (error.errors.address) {
      return res.status(401).json({
        success: false,
        message: error.errors.address.message,
      });
    } else {
      return res.status(401).json({ success: false, message: error });
    }
  }
};
