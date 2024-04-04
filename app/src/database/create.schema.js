function CreateBasicSchema(connection) {
  this.createTablePeople = async function () {
    const createTablePeople = () =>
      new Promise((resolve) => {
        connection.query(
          `CREATE TABLE peoples (id VARCHAR(255) NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL)`,
          function (err, result) {
            if (err) throw err;

            resolve(result);
          }
        );
      });

    const validateIfTableExists = () =>
      new Promise((resolve) => {
        const query = `SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = '${connection.config.database}' AND table_name = 'peoples'`;

        connection.query(query, (error, results) => {
          if (error) throw error;

          const tableExists = results[0].count > 0;

          resolve(tableExists);
        });
      });

    const tableExists = await validateIfTableExists();

    if (!tableExists) await createTablePeople();
  };
}

module.exports = CreateBasicSchema;
