const Fazendeiro = require("../services/ListAllFazendeiroService");

exports.listAllFazendeiroController = async (req, res) => {
  try {
    const listAllFazendeiro = await Fazendeiro.listAllFazendeiroService();

    res.status(200).json(listAllFazendeiro);
  } catch (error) {
    // res.status(500).json({ erro: error.message});
    res.status(500).json({ message: error.message });
  }
};
