const express = require("express");
const routes = express.Router();

const img = require("./controller/imgController")
const jimp = require("./controller/jimp")


routes.get("/", (request, response) => response.json({"message": "System is up!"}));

routes.get("/teste", img.compress)
routes.get("/teste1", img.reduce)
routes.get("/jimp", jimp.teste)


module.exports = routes;