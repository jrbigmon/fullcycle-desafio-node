const PeopleCount = require("../model/people.count");
const PeopleCreate = require("../model/people.create");
const PeopleList = require("../model/people.list");
const People = require("../repository/people");
const PeopleFormHtml = require("../view/people.form");
const PeopleListHtml = require("../view/people.list");

function PeopleService(connection) {
  this.create = async function (req, res) {
    const { body } = req;
    try {
      if (!body)
        return res.status(401).json({
          message: "Invalid body received",
          success: false,
        });

      if (!body?.name?.trim()) {
        return res.status(401).redirect("/people/form");
      }

      const people = new People(body?.name);

      const peopleCreate = new PeopleCreate(connection);

      await peopleCreate.exec(people);

      return res.status(201).redirect("/people");
    } catch (error) {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
    }
  };

  this.list = async function (_, res) {
    try {
      const peopleList = new PeopleList(connection);
      const peopleCount = new PeopleCount(connection);

      const [peoples, count] = await Promise.all([
        peopleList.exec(),
        peopleCount.exec(),
      ]);

      return res.status(200).send(new PeopleListHtml(peoples).html);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };

  this.form = async function (_, res) {
    try {
      return res.status(200).send(new PeopleFormHtml().html);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };
}

module.exports = PeopleService;
