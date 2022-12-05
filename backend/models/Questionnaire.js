const mongoose = require("mongoose");

const Questionnaire = mongoose.Schema(
  "Questionnaire",
  new mongoose.Schema({
    title: String,
    author: String,
    images: [],
    results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Results"
      }
    ],
    timestamps: true
  })
);
module.exports = mongoose.model('Questionnaire', Questionnaire);