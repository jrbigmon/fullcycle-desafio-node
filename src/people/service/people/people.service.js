const PeopleCreate = require("../../model/people/people.create");
const People = require("../../repository/people");

function PeopleService(connection) {
  this.create = async function (req, res) {
    const { body } = req;
    if (!body)
      return res.status(401).json({
        message: "Invalid body received",
        success: false,
      });

    const people = new People(body?.name);

    const peopleCreate = new PeopleCreate(connection);

    try {
      await peopleCreate.exec(people);
    } catch (error) {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
    }

    return res.status(201).json({
      message: "People created successfully",
      success: true,
      people,
    });
  };
}

module.exports = PeopleService;
