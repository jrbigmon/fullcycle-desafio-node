const objectToArrayOfValues = require("../../utils/object-to-array-of-values");

function PeopleCreate(connection) {
  this.exec = async function (people) {
    const sql = "INSERT INTO peoples (id, name) VALUES (?)";

    const values = objectToArrayOfValues(people.toJSON());

    await new Promise((resolve) => {
      connection.query(sql, [values], function (err, result) {
        if (err) throw err;

        resolve(result);
      });
    });
  };
}

module.exports = PeopleCreate;
