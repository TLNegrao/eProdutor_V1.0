// const { startTestDatabase, stopTestDatabase } = require('../utils/testesDatabase');
// const mongoose = require('mongoose');
// const Fazendeiro = require('../unit/testesModelo.test');

// // Inicialize o MongoDB fictício antes dos testes
// beforeAll(async () => {
//     await startTestDatabase();
//   });
  
//   // Encerre o MongoDB fictício após os testes
//   afterAll(async () => {
//     await stopTestDatabase();
//   });

// describe('Fazendeiro Model', () => {
//   beforeAll(async () => {
//     // Conectar ao banco de dados MongoDB de teste ou configurar um banco de dados de teste
//     await mongoose.connect('mongodb://localhost/createfazendeiros', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   });


//   afterAll(async () => {
//     // Desconectar do banco de dados após os testes
//     await mongoose.connection.close();
//   });

//   it('Deve criar um novo fazendeiro', async () => {
//     const fazendeiroData = {
//             "cpf": "04519958997",
//             "nomeProdutor": "Thiago Luis",
//             "nomeFazenda": "Novo Horizonte",
//             "cidade": "Morretes",
//             "estado": "Mg",
//             "areaTotal": 7520,
//             "areaAgricultavel": 6000,
//             "areaVegetacao": 540,
//             "culturasPlantadas": ["Cafe", "Milho", "Algodao"]
//     };

//     const fazendeiro = new Fazendeiro(fazendeiroData);
//     const savedFazendeiro = await fazendeiro.save();

//     expect(savedFazendeiro).toBeDefined();
//   });
// });



// const mongoose = require('mongoose');
// const Fazendeiro = require('../unit/fazendeiro.test'); // Importe o modelo

// // Inicialização do banco de dados de teste
// beforeAll(async () => {
//   await mongoose.connect('mongodb://localhost/testdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// // Limpeza do banco de dados antes de cada teste
// beforeEach(async () => {
//   await Fazendeiro.deleteMany({});
// });

// // Encerramento da conexão e limpeza após todos os testes
// afterAll(async () => {
//   await mongoose.disconnect();
// });

// test('Criar e encontrar fazendeiro no banco de dados', async () => {
//   // Crie um novo fazendeiro
//   const fazendeiro = new Fazendeiro({
//     cnpj: "04208193000121",
//     nomeProdutor: "Thiago Luis",
//     nomeFazenda: "Novo Horizonte",
//     cidade: "Morretes",
//     estado: "Mg",
//     areaTotal: 7520,
//     areaAgricultavel: 6000,
//     areaVegetacao: 540,
//     culturasPlantadas: ["Cafe", "Milho", "Algodao"],
//   });

//   // Salve o fazendeiro no banco de dados
//   await fazendeiro.save();

//   // Verifique se o fazendeiro foi criado com sucesso
//   const fazendeiroCriado = await Fazendeiro.findOne({ cnpj: "04208193000121" });
//   expect(fazendeiroCriado).toBeDefined();
// });

// test('Encontrar fazendeiro no banco de dados', async () => {
//   // Crie um fazendeiro no banco de dados
//   const fazendeiro = new Fazendeiro({
//     cnpj: "04208193000121",
//     nomeProdutor: "Thiago Luis",
//     nomeFazenda: "Novo Horizonte",
//     cidade: "Morretes",
//     estado: "Mg",
//     areaTotal: 7520,
//     areaAgricultavel: 6000,
//     areaVegetacao: 540,
//     culturasPlantadas: ["Cafe", "Milho", "Algodao"],
//   });
//   await fazendeiro.save();

//   // Encontre o fazendeiro no banco de dados
//   const fazendeiroEncontrado = await Fazendeiro.findOne({ cnpj: "04208193000121" });

//   // Verifique se o fazendeiro foi encontrado com sucesso
//   expect(fazendeiroEncontrado).toBeDefined();
//   expect(fazendeiroEncontrado.nomeProdutor).toBe("Thiago Luis");
//   expect(fazendeiroEncontrado.cidade).toBe("Morretes");
//   expect(fazendeiroEncontrado.culturasPlantadas).toEqual(["Cafe", "Milho", "Algodao"]);
// });




// __tests__/integration/Arquivo.integration.test.js

const mongoose = require('mongoose');
const createFazendeiroModel = require('../../src/models/CreateFazendeiroModel'); // Importe o seu modelo

describe('Testes de integração para Arquivo.js', () => {
  beforeAll(async () => {
    // Conecte-se ao banco de dados MongoDB ou configure um ambiente de teste adequado
    await mongoose.connect('mongodb://localhost/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Feche a conexão com o banco de dados após todos os testes
    await mongoose.connection.close();
  });

  it('Deve criar um documento de fazendeiro com sucesso', async () => {
    // Crie um documento de fazendeiro usando o modelo
    const fazendeiroData = {
      
        cnpj: "04208193000121",
        nomeProdutor: "Thiago Luis",
        nomeFazenda: "Novo Horizonte",
        cidade: "Morretes",
        estado: "Mg",
        areaTotal: 7520,
        areaAgricultavel: 6000,
        areaVegetacao: 540,
        culturasPlantadas: ["Cafe", "Milho", "Algodao"]
      
    };

    const fazendeiro = new createFazendeiroModel(fazendeiroData);

    // Salve o documento no banco de dados
    const savedFazendeiro = await fazendeiro.save();

    // Realize asserções para verificar se o documento foi salvo corretamente
    expect(savedFazendeiro.cidade).toBe('Morretes');
    expect(savedFazendeiro.estado).toBe('Mg');
    // Realize asserções adicionais conforme necessário
  });
});
