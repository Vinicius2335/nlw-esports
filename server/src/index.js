import { PrismaClient } from "@prisma/client";

const express = require('express');

const app = express();
const prisma = new PrismaClient();

// Listagem de games com contagem de anuncio
// findMany() demora -> quando uma instruçai demora temos que usar o async/await
app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany();
  return res.json(games);
});

// Criaçao de novo anúncio
app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

// Listagem de anúncios por games
app.get("/games/:id/ads", (req, res) => {
  // const gameId = req.params.id;

  return res.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
  ]);
});

// Buscar discord pelo ID do anúncio
app.get("/ads/:id/discord", (req, res) => {
  // const adId = req.params.id;

  return res.json([]);
});

app.listen(3333, () => {
  console.log("Servidor porta 3333");
});
