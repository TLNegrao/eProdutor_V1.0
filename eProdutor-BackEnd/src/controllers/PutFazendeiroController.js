const fazendeiroPut = require("../services/PutFazendeirorService");

exports.putFazendeiroController = async (req, res) => {

  const fazendeiroId = req.params.id;
  const fazendeiroBody = req.body;

  // console.log('putUserController', fazendeiroId);
  // console.log('putUserController', fazendeiroBody);
  
  // try{   

  //   const updateFazendeiro = await fazendeiroPut.putFazendeiroService(fazendeiroId, fazendeiroBody);

  //   return res.status(200).send(updateFazendeiro);

  // } catch (error) {
  //   return res.status(500).send({
  //     message: "Erro ao atualizar o fazendeiro com id " + fazendeiroId.id
  //   })
  // }


  try {
    const updateFazendeiro = await fazendeiroPut.putFazendeiroService(fazendeiroId, fazendeiroBody);
    
    return res.status(200).json(updateFazendeiro);
  } catch (error) {
    // return res.status(500).json({ message: "Erro ao atualizar o fazendeiro com id " + fazendeiroId });
    return res.status(400).send({ message: error.message });
  }






}