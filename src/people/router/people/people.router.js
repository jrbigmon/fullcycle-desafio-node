const express = require("express");
const PeopleService = require("../../service/people/people.service");

function PeopleRouter(connection) {
  this.router = express.Router();

  this.router.post("/people", new PeopleService(connection).create);
}

module.exports = PeopleRouter;
