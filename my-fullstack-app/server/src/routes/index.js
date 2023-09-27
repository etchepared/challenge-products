const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  // getItemById,
  // addItem,
  // updateItem,
  // deleteItem,
} = require("../controllers/index");

// GET all items
router.get("/products", getAllProducts);

// GET item by ID
//router.get("/items/:id", getItemById);

// POST new item
//router.post("/items", addItem);

// PUT update item by ID
//router.put("/items/:id", updateItem);

// DELETE item by ID
//router.delete("/items/:id", deleteItem);

module.exports = router;
