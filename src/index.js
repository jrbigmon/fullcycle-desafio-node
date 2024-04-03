const express = require("express");

const database = require("./database/connection");

const PeopleRouter = require("./people/router/people/people.router");

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(new PeopleRouter(database.connection));

app.listen(port, () => {
  console.log("listening on port " + port);
});
