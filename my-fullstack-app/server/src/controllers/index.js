const products = require("../data/db.json");

const getAllProducts = async (req, res) => {
  try {
    if (products.length > 0) {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts };
