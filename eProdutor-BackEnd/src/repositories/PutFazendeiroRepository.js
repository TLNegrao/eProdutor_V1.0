const Fazendeiro = require("../models/CreateFazendeiroModel");
const fazenda = require("../utils/Regras");

exports.putFazendeiroRepository = async (id, body) => {
  try {

    console.log('putUserController', body);

    const fazendeiro = await Fazendeiro.findById(id);
    const area = await fazenda.validateAreaVegetation(body);

    if (!fazendeiro) {
      throw new Error("Fazendeiro não encontrado");
    }

    if (!area) {
      throw new Error('Área agricultável e vegetação maior que total!');
    }

    const fazendeiroUpdated = await Fazendeiro.findByIdAndUpdate(
      { _id: id },
      {
        cpf: body.cpf,
        cnpj: body.cnpj,
        nomeProdutor: body.nomeProdutor,
        nomeFazenda: body.nomeFazenda,
        cidade: body.cidade,
        estado: body.estado,
        areaTotal: body.areaTotal,
        areaAgricultavel: body.areaAgricultavel,
        areaVegetacao: body.areaVegetacao,
        culturasPlantadas: body.culturasPlantadas
      },
      { new: true }
    );

    return fazendeiroUpdated;
  } catch (error) {
    throw error;
  }
};
