const DeleteFazendeiroByIdRepository = require("../repositories/DeleteFazendeiroByIdRepository");

exports.deleteFazendeiroByIdService = async (data) => {
  try {


    const deleteFazendeiro = await DeleteFazendeiroByIdRepository.deleteFazendeiroByIdRepository(data);

    return deleteFazendeiro;
    
  } catch (error) {
    throw error;
  }
};