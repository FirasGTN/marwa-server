const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let search = req.params;
    let name = search.search;
    const query = {
      name: new RegExp(name, "i"),
    };
    const results = await Product.find(query);
    if (results.length > 0) {
      return res.status(201).json({ results });
    } else {
      return res.status(401).json({ message: "Nothing Found" });
    }
  } catch (error) {
    console.error("Error searching products by name:", error);
    throw error;
  }
};
