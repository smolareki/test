const express = require("express");
const routes = express.Router();



routes.get("/", (request, response) => response.json({"message": "System is up!"}));


module.exports = routes;