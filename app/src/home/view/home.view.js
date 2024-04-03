function HomeHtml() {
  this.html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Full Cycle</title>
      </head>
      <style>
        body {
          margin: 50px
        }

        ul, li {
          font-size: 24px;
          margin: 20px 0px;
          line-height: 16px;
          font-weight: bold;
          width: auto;
        }
      </style>
      <body>
        <h1>Full Cycle Rocks!</h1>
        <ul>
          <a href="http://localhost:3000/people"><li>List of people</li></a>
          <a href="http://localhost:3000/people/form"><li>Create new people</li></a>
        </ul>
      </body>
    </html>
  `;
}

module.exports = HomeHtml;
