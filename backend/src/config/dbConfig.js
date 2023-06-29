const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://matheuspires711:UR4jrGDXj2PF2R6l@cluster0.wwpzx7d.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
