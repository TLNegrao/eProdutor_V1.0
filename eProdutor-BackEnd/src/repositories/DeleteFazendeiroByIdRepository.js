const fazendeiroModel = require('../models/CreateFazendeiroModel');
const fazendeiroNotExists = require('../utils/Regras');


exports.deleteFazendeiroByIdRepository = async (id) => {

    try{


        const fazendeiroExist = await fazendeiroNotExists.validateDeleteUserById(id);
        if(!fazendeiroExist) {
            throw new Error("Id inexistente!");
        }



        const deleteFazendeiro =  await fazendeiroModel.findOneAndDelete({_id: id});
        return deleteFazendeiro;

        } catch(error) {
        throw error
    }


};