const fazendeiroModel = require('../models/CreateFazendeiroModel');

exports.validateIfCNPjExist = async (data) => {
  fazendeiroFound = await fazendeiroModel.findOne({ cnpj: data.cnpj });
  if(fazendeiroFound){
    return true;
  }
  return false;
};

exports.validateIfCPfExist = async (data) => {
  fazendeiroFound = await fazendeiroModel.findOne({ cpf: data.cpf });
  if(fazendeiroFound){
    return true;
  }
  return false;
};

exports.validateDeleteUserById = async (id) => {
  userFound = await fazendeiroModel.findOne({ _id: id });
  if(userFound){
    return true;
  }
  return false;
};

exports.validateFazendeiroExist = async (id) => {
  userFound = await fazendeiroModel.findOne({ _id: id });
  if(userFound){
    return true;
  }
  return false;
};

exports.validateAreaVegetation = async (body) => {
  const areaTotal = parseFloat(body.areaTotal);
  // console.log("areaTotal", areaTotal)

  const areaAgricultavel = parseFloat(body.areaAgricultavel);
  // console.log("areaAgricultavel", areaAgricultavel)

  const areaVegetacao = parseFloat(body.areaVegetacao);
  // console.log("areaVegetacao", areaVegetacao)
  
  const somaAreas = areaAgricultavel + areaVegetacao;
  // console.log("somaAreas", somaAreas);
  if (somaAreas > areaTotal) {
    return false;
  } else {
    return true;
  }
};