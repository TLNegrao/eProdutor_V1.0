const listFazendeiroById = require("../services/ListFazendeiroByIdService");

exports.listFazendeiroByIdController = async (req, res) => {
  const id = req.params.id;

  // try{

  //   const listFazendeiro = await listFazendeiroById.listFazendeiroByIdService(id);

  //   return res.send(listFazendeiro);

  // } catch(error) {
  //  return res.send(error.message);
  // }

  try {
    const listFazendeiro = await listFazendeiroById.listFazendeiroByIdService(
      id
    );

    return res.status(200).json(listFazendeiro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
