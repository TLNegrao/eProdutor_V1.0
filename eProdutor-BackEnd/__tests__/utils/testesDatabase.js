// const { MongoMemoryServer } = require('mongodb-memory-server');
// const mongoose = require('mongoose');

// let mongod;

// // Inicialize o MongoDB fictício com uma porta personalizada
// beforeAll(async () => {
//   mongod = await MongoMemoryServer.create({
//     instance: {
//       port: 27018, // Porta personalizada (substitua pela porta desejada)
//     },
//   });
//   const uri = mongod.getUri();

//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// // Encerre o MongoDB fictício após os testes
// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongod.stop();
// });

// testDatabase.js


const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongod;
let db;

async function startTestDatabase() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function stopTestDatabase() {
  await db.disconnect();
  await mongod.stop();
}

module.exports = { startTestDatabase, stopTestDatabase };