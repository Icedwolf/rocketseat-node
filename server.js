const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express(); //servidor
app.use(express.json()); //permitir requests json
app.use(cors()); //enable cross-origin acess

// conectando Db
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

//import all models
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001); //porta do servidor
