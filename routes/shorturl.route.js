const express = require("express");
const shortUrl = require("../controllers/shorturl.controller");

let shortUrlRoute = express.Router();

shortUrlRoute.post("/", shortUrl)

module.exports = shortUrlRoute;