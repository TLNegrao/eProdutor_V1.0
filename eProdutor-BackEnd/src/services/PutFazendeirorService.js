const PutFazendeiroRepository = require("../repositories/PutFazendeiroRepository");

exports.putFazendeiroService = async (id, body) => {


    // const fazendeiroId = id;
    // const fazendeiroBody = body;

    // console.log('putService', fazendeiroId);
    // console.log('putService', fazendeiroBody);


  try {
    
    const fazendeiroId = id;
    const fazendeiroBody = body;

    // console.log('putService***', fazendeiroId);
    // console.log('putService***', fazendeiroBody);

    const putFazendeiro = await PutFazendeiroRepository.putFazendeiroRepository(fazendeiroId, fazendeiroBody);

    return putFazendeiro;
  } catch (error) {
    throw error;
  }
};
