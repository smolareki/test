const express = require("express");
const routes = express.Router();



routes.get("/", (request, response) => response.json({"message": "System is upside down!"}));


module.exports = routes;