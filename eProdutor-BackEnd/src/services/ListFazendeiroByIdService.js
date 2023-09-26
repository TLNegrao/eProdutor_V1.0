const ListFazendeiroByIdRepository = require("../repositories/ListFazendeiroByIdRepository");

exports.listFazendeiroByIdService = async (data) => {
  try {

    // const userId = data;
    const listFazendeiroId = await ListFazendeiroByIdRepository.listFazendeiroByIdRepository(data);
    
    return listFazendeiroId;
    
  } catch (error) {
    throw error;
  }
};