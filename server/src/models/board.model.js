const mongoose = require("mongoose");

const Board = mongoose.model(
  "Board",
  new mongoose.Schema({
    id: String,
    name: String,
    emoji: String,
    owner: String,
  })
);

module.exports = Board;
