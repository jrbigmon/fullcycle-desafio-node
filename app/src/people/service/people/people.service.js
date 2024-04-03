const PeopleCount = require("../../model/people/people.count");
const PeopleCreate = require("../../model/people/people.create");
const PeopleList = require("../../model/people/people.list");
const People = require("../../repository/people");

function PeopleService(connection) {
  this.create = async function (req, res) {
    const { body } = req;
    try {
      if (!body)
        return res.status(401).json({
          message: "Invalid body received",
          success: false,
        });

      const people = new People(body?.name);

      const peopleCreate = new PeopleCreate(connection);

      await peopleCreate.exec(people);

      return res.status(201).json({
        message: "People created successfully",
        success: true,
        people,
      });
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

      return res.status(200).json({
        message: "People list successfully",
        success: true,
        count,
        peoples,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };
}

module.exports = PeopleService;
