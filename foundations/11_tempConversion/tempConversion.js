const convertToCelsius = function (temp) {
  return Math.round((fromF = (temp - 32) * (5 / 9)) * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  return Math.round((fromC = temp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
