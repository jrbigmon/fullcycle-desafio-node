function PeopleListHtml(peoples, proxyPort) {
  const linkBack = `
    <a href="http://localhost:${proxyPort}" style="align-self: flex-start; margin-left:25%; margin-top: 20px">
      < BACK
    </a>
  `;

  this.emptyList = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>List of people</title>
      </head>
      <body>
        <div style="align-self: flex-start; margin-left:25%; margin-top: 20px">
          <h1>The list is empty!!!</h1>
        </div>
        ${linkBack}
      </body>
    </html>
  `;

  function getTableRow(peoples) {
    return peoples
      ?.map((people) => {
        return `
        <tr>
          <td style="width:50%;">${people.id}</td>
          <td style="width:50%;">${people.name}</td>
        </tr>
      `;
      })
      .join(" ");
  }

  this.html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>List of people</title>
        <style>
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 50%;
          }

          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #dddddd;
          }
        </style>
      </head>

      <body style="display:flex; flex-direction:column; align-items:center">
        <h2>List of people</h2>

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>

          ${getTableRow(peoples)}
        </table>

        ${linkBack}
      </body>
    </html>
  `;
}

module.exports = PeopleListHtml;
