const express = require("express");
const server = express();
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
server.use("/", routes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
