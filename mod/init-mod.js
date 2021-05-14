var DataTypes = require("sequelize").DataTypes;
var _city = require("./city");
var _country = require("./country");
var _countrylanguage = require("./countrylanguage");

function initModels(sequelize) {
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var countrylanguage = _countrylanguage(sequelize, DataTypes);


  return {
    city,
    country,
    countrylanguage,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
