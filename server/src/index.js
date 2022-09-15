const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

// Listagem de games com contagem de anuncio
// findMany() demora -> quando uma instruçai demora temos que usar o async/await
app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          Ads: true,
        },
      },
    },
  });

  return res.json(games);
});

// Criaçao de novo anúncio
app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      id: uuidv4(),
      name: body.name,
      yearPlaying: body.yearPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      usaVoiceChannel: body.usaVoiceChannel,
      createdAt: new Date(),
    },
  });

  return res.status(201).json(ad);
});

// Listagem de anúncios por games
app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      usaVoiceChannel: true,
      yearPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: convertMinuteStringToHours(ad.hourStart),
        hourEnd: convertMinuteStringToHours(ad.hourEnd),
      };
    })
  );
});

// Buscar discord pelo ID do anúncio
app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad.discord,
  });
});

app.listen(3333, () => {
  console.log("Servidor porta 3333");
});

function convertHourStringToMinutes(hourString = "") {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}

function convertMinuteStringToHours(minutesAmount) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
