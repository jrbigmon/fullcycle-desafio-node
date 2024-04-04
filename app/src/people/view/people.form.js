function PeopleFormHtml(proxyPort) {
  this.html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create new people</title>
      </head>
      <style>
        body {
          margin: 50px
        }
        form {
          margin-bottom: 20px
        }
      </style>
      <body>
        <h2>Create new people</h2>
        <form action="http://localhost:${proxyPort}/people" method="POST">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br /><br />
          <input type="submit" value="Send" />
        </form>
      
        <a href="http://localhost:${proxyPort}">
          < BACK
        </a>
      </body>
    </html>  
  `;
}

module.exports = PeopleFormHtml;
