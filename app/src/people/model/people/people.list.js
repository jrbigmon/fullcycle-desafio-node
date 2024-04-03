const People = require("../../repository/people");

function PeopleList(connection) {
  this.exec = async function () {
    const sql = `SELECT * FROM peoples;`;

    const peoples = await new Promise((resolve) => {
      connection.query(sql, function (err, results) {
        if (err) throw err;

        resolve(results);
      });
    });

    return peoples?.map((people) => new People(people?.name, people?.id));
  };
}

module.exports = PeopleList;
