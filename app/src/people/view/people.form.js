function PeopleFormHtml() {
  this.html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Criar nova pessoa</title>
      </head>
      <style>
        body {
          margin: 50px
        }
      </style>
      <body>
        <h2>Criar nova pessoa</h2>
        <form action="http://localhost:3000/people" method="POST">
          <label for="name">Nome:</label><br />
          <input type="text" id="name" name="name" /><br /><br />
          <input type="submit" value="Enviar" />
        </form>
      </body>
    </html>  
  `;
}

module.exports = PeopleFormHtml;
