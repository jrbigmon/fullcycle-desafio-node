const express = require("express");
const HomeService = require("../service/home.service");

function HomeRouter() {
  this.router = express.Router();

  const homeService = new HomeService();

  this.router.get("/", homeService.home);
}

module.exports = HomeRouter;
