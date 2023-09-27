const products = require("../data/db.json");

const getAllProducts = async (req, res) => {
  try {
    const { category, price, condition } = req.query;

    const filteredProducts = products.filter((product) => {
      return (
        (!category || product.category === category) &&
        (!price || product.price <= price) &&
        (!condition || product.condition === condition)
      );
    });

    if (filteredProducts.length > 0) {
      res.status(200).json(filteredProducts);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts };
