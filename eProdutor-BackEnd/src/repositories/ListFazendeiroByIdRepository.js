const fazendeiroModel = require("../models/CreateFazendeiroModel");

exports.listFazendeiroByIdRepository = async (data) => {
  try {

    const listFazendeiroById = await fazendeiroModel.findById(data);
    
    return listFazendeiroById;
 

  } catch (error) {
    throw error;
  }
};