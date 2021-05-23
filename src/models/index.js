const config = require('../config')
const Sequelize = require('sequelize')
const { Op } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'DB/database.sqlite'
  });
sequelize.options.logging = (config.mysql.logopt == 'on')
const db = {};

db.Op = Op;
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.DB_NACHIHATEO_QUS = require('./DB_NACHIHATEO_QUS')(sequelize, Sequelize);


module.exports = db;