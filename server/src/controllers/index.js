const products = require("../data/db.json");

const getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, condition } = req.query;

    const filteredProducts = products.filter((product) => {
      return (
        (!category || product.category === category) &&
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!condition || product.condition === condition)
      );
    });

    if (filteredProducts.length > 0) {
      const resFilteredProducts = filteredProducts.map((filteredProduct) => {
        return {
          id: filteredProduct.id,
          title: filteredProduct.title,
          image: filteredProduct.image,
          category: filteredProduct.category,
          condition: filteredProduct.condition,
          price: filteredProduct.price,
        };
      });
      res.status(200).json(resFilteredProducts);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts };
