const createFazendeiro = require("../services/CreateFazendeiroService");

exports.createFazendeiroController = async (req, res) => {

  
  
  try {  
    
    const fazendeiroParam = req.body;
    console.log("fazendeiroParam",fazendeiroParam)

    const saveAtDataBase = await createFazendeiro.createFazendeiroService(fazendeiroParam);
    
    // return res.send(saveAtDataBase);
    return res.status(200).send(saveAtDataBase);

  } catch (error) {

    // return res.status(400).send(error.message);  
    return res.status(400).send({ message: error.message });  

  } 

  

}