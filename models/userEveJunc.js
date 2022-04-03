const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserEveJunc extends Model { }

UserEveJunc.init({})


module.exports = UserEveJunc;