const express = require("express");
const route = express.Router();

route.post("/addproduct", require("./addProduct"));
route.put("/updateProduct", require("./updateproduct"));
route.delete("/deleteProduct/:deleteProductId", require("./deleteProduct"));
route.put("/banuser", require("./banUser"));
route.get("/users", require("./getusers"));

module.exports = route;
