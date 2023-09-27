//crear una función getAllProducts para obtener todos los productos que están en db.json
//exportar la función getAllProducts
const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../data/db.json");

const getAllProducts = async (req, res) => {
  try {
    const data = await fs.promises.readFile(dbPath, "utf8");
    console.log(data);
    const products = JSON.parse(data);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
