const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/Items");

const app = express();

// Body Parser middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Mongodb Connected...`))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startedon Port ${PORT}`));
