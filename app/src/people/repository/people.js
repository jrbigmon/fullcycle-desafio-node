const { randomUUID } = require("node:crypto");

function People(name, id = undefined) {
  this.name = name;
  this.id = id ?? randomUUID();
  this.toJSON = function () {
    return {
      id: this.id,
      name: this.name,
    };
  };
}

module.exports = People;
