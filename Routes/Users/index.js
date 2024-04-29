const express = require("express");
const route = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { check } = require("express-validator");
const { login } = require("../Users/login");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

route.post("/checkout", require("./checkout"));
route.post("/additemcart", require("./addItemCart"));
// route.put("/deletitemcart", require("./DeleteItemCart"));
route.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login // Ensure that `login` function is passed here as the callback
);
// route.post("/login", require("./login"));
route.post("/signup", require("./signup"));
route.get("/getuserdata/:userID", require("./getUserData"));

route.get("/getproduct", require("./getProduct"));
// route.get("/getproduct/:id", require("./getOneProduct"));
// route.get("/getproduct/search/:search", require("./getSearchProd"));

module.exports = route;
