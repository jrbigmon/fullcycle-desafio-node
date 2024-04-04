const express = require("express");

const database = require("./database/connection");

const PeopleRouter = require("./people/router/people.router");
const HomeRouter = require("./home/router/home.router");
const getArgs = require("./utils/get-args");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { connection } = database;

const proxyPort = getArgs("PROXY_REVERSE_PORT") ?? port;

const peopleRouter = new PeopleRouter(connection, proxyPort).router;
const homeRouter = new HomeRouter(proxyPort).router;

app.use([peopleRouter, homeRouter]);

app.listen(port, () => {
  console.log("listening on port " + port);
});
