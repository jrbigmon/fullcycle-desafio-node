function PeopleListHtml(peoples) {
  const emptyListHtml = `
  <div display=flex; align-items=center; justify-content=center> 
    <h1>Lista de usuários está vazia :(</h1>
  </div>
  `;

  if (!peoples?.length) return emptyListHtml;

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
    <html>
      <head>
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
        <h2>Peoples</h2>

        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>

          ${getTableRow(peoples)}
        </table>

        <a href="http://localhost:3000" style="align-self: flex-start; margin-left:25%; margin-top: 20px">
          < BACK
        </a>
      </body>
    </html>
  `;
}

module.exports = PeopleListHtml;
