const CreateFazendeiroRepository = require('../repositories/CreateFazendeiroRepository')

exports.createFazendeiroService = async (data) => {
  try {
    const fazendeiroParam = data;
    // console.log("DataService",data)

    const createFazendeiro = await CreateFazendeiroRepository.createFazendeiroRepository(fazendeiroParam);
    
    return createFazendeiro;

  } catch (error) {
    throw error
  }

};