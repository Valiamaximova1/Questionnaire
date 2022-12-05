const mongoose = require("mongoose");

const Results = mongoose.Schema({
    username: String,
    text: String,
    createdAt: Date,
    questionnaire: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Questionnaire' 
      },
      timestamps: true
  })
;

module.exports = mongoose.model('Results', Results);