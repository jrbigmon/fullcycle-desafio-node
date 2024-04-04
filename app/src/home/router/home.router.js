const express = require("express");
const HomeService = require("../service/home.service");

function HomeRouter(proxyPort) {
  this.router = express.Router();

  const homeService = new HomeService(proxyPort);

  this.router.get("/", homeService.home);
}

module.exports = HomeRouter;
