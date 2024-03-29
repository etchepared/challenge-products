const express = require("express");
const server = express();
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

// Middleware
server.use(cors());
server.use(express.json());

// Routes
server.use("/", routes);

// Start server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
