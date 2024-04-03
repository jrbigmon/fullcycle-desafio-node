const objectToArrayOfValues = (object) => {
  if (typeof object !== "object") return [];

  return Object.values(object);
};

module.exports = objectToArrayOfValues;
