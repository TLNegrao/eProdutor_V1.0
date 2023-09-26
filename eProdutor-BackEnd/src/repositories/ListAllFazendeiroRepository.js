const Fazendeiro = require("../models/CreateFazendeiroModel");

exports.listAllFazendeiroRepository = async () => {
  try {
    const fazendeiro = await Fazendeiro.find();
    return fazendeiro;
  } catch (error) {
    throw error;
  }
};
