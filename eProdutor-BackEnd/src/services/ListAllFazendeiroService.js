const ListAllFazendeiroRepository = require("../repositories/ListAllFazendeiroRepository");

exports.listAllFazendeiroService = async () => {
  try {
    const listFazendeiro =
      await ListAllFazendeiroRepository.listAllFazendeiroRepository();

    return listFazendeiro;
  } catch (error) {
    throw error;
  }
};