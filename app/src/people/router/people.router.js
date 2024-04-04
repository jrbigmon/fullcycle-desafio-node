const express = require("express");
const PeopleService = require("../service/people.service");

function PeopleRouter(connection, proxyPort) {
  this.router = express.Router();

  const peopleService = new PeopleService(connection, proxyPort);

  this.router.post("/people", peopleService.create);
  this.router.get("/people", peopleService.list);
  this.router.get("/people/form", peopleService.form);
}

module.exports = PeopleRouter;
