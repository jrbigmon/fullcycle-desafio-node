const mysql = require("mysql");
const config = require("./config");

function Database() {
  this.connection = mysql.createConnection(config);
}

module.exports = new Database();
