const express = require("express");
const PeopleService = require("../service/people.service");

function PeopleRouter(connection) {
  this.router = express.Router();

  const peopleService = new PeopleService(connection);

  this.router.post("/people", peopleService.create);
  this.router.get("/people", peopleService.list);
  this.router.get("/people/form", peopleService.form);
}

module.exports = PeopleRouter;
