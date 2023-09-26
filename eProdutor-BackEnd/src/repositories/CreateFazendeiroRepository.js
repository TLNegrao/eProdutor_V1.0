const createFazendeiroSchema = require('../models/CreateFazendeiroModel');
const { validarCPF } = require('../utils/ValidarCPF');
const { validarCNPJ } = require('../utils/ValidarCNPJ');
const fazendeiroCpfExist = require('../utils/Regras');
const fazendeiroCnpjExist = require('../utils/Regras');
const fazenda = require('../utils/Regras');

exports.createFazendeiroRepository = async (data) => {

   try{

        const fazendeiroCpf = await fazendeiroCpfExist.validateIfCPfExist(data);
        const fazendeiroCnpj = await fazendeiroCnpjExist.validateIfCNPjExist(data);
        const area = await fazenda.validateAreaVegetation(data);


        if (data.cpf) {
            const cpf = String(data.cpf);
            const cpfValido = await validarCPF(cpf);

            if (!cpfValido) {
                throw new Error('CPF inválido!');
            }
            if(fazendeiroCpf) {
                throw new Error("Cpf já existe!");
            }
        }

        if (data.cnpj) {
            const cnpj = String(data.cnpj);
            const cnpjValido = await validarCNPJ(cnpj);

            if (!cnpjValido) {
                throw new Error('CNPJ inválido!');
            }

            if(fazendeiroCnpj) {
                throw new Error("Cnpj já existe!");
            }
        }
        
        if(!area){
            throw new Error('Área agricultável e vegetação maior que total!')
        }


        const createFazendeiro = new createFazendeiroSchema({
            cpf: data.cpf,
            cnpj: data.cnpj,
            nomeProdutor: data.nomeProdutor,
            nomeFazenda: data.nomeFazenda,
            cidade: data.cidade,
            estado: data.estado,
            areaTotal: data.areaTotal,
            areaAgricultavel: data.areaAgricultavel,
            areaVegetacao: data.areaVegetacao,
            culturasPlantadas: data.culturasPlantadas,
        });

        const saveFazendeiro = await createFazendeiro.save();


        return saveFazendeiro;


   } catch(error) {
    throw error;
   }

};





