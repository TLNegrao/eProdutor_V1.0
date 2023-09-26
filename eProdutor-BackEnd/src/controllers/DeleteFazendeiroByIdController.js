const deleteFazendeiro = require('../services/DeleteFazendeiroService')

exports.deleteFazendeiroByIdController = async (req, res) => {
  
  const id = req.params.id;

  // try {

  //   if (typeof id !== 'string') {
  //     return res.status(400).json({ error: 'ID inválido' });
  //   }

  //   await deleteFazendeiro.deleteFazendeiroByIdService(id);


    
  //   return res.send({ message: "usuário deletado com sucesso: " + id });

  // } catch (error) {
  //   return res.send(error.message);
  // }



  try {
    if (typeof id !== 'string') {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await deleteFazendeiro.deleteFazendeiroByIdService(id);

    return res.status(200).json({ message: "Usuário deletado com sucesso: " + id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }






  
};