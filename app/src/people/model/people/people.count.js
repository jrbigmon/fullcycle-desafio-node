function PeopleCount(connection) {
  this.exec = async function () {
    const sql = `SELECT COUNT(*) FROM peoples`;

    const count = await new Promise((resolve) => {
      connection.query(sql, function (err, result) {
        if (err) throw err;

        resolve(Object.values(result?.[0])?.[0]);
      });
    });

    return count;
  };
}

module.exports = PeopleCount;
