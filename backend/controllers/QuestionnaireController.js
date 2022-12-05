const { Questionnaire } = require('../models');

const QuestionnaireController = {
  async index(req, res){
  	const questionnaires = await Questionnaire.find().populate('Results');
  	res.send(questionnaires);
  },
  async show(req, res){
  	const questionnaire = await Questionnaire.findById(req.params.id).populate('Results');
  	res.send(questionnaire);
  }
};
module.exports = QuestionnaireController;