const express = require("express");
const getShortUrl = require("../controllers/getShortUrl.controller");

let getShortUrlRoute = express.Router();

getShortUrlRoute.get("/:shortUrl", getShortUrl)

module.exports = getShortUrlRoute