const express = require("express");

const database = require("./database/connection");

const PeopleRouter = require("./people/router/people.router");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const peopleRouter = new PeopleRouter(database.connection).router;

app.get("/", (_, res) => {
  return res.status(200).json({
    message: "Full Cycle",
    success: true,
  });
});

app.use([peopleRouter]);

app.listen(port, () => {
  console.log("listening on port " + port);
});
