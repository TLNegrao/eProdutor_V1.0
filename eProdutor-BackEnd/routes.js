const express = require("express");
const router = express.Router();

const createFazendeiro = require("./src/controllers/CreateFazendeiroController");
router.post("/register", createFazendeiro.createFazendeiroController);

const deleteFazendeiroById = require("./src/controllers/DeleteFazendeiroByIdController");
router.delete("/delete-fazendeiro/:id", deleteFazendeiroById.deleteFazendeiroByIdController);

const listAllFazendeiro = require("./src/controllers/ListAllFazendeirosController");
router.get("/list-fazendeiro", listAllFazendeiro.listAllFazendeiroController);

const listFazendeiroById = require("./src/controllers/ListFazendeiroByIdController");
router.get("/list-fazendeiro/:id", listFazendeiroById.listFazendeiroByIdController);

const putFazendeiro = require("./src/controllers/PutFazendeiroController");
router.put("/update-fazendeiro/:id", putFazendeiro.putFazendeiroController);

const dash = require("./src/utils/DashBoardFazendeiros");
router.get("/dashFazendeiros", dash.baseDashboardView);

module.exports = router;