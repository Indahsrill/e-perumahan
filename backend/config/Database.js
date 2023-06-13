const Sequelize = require('sequelize')

const db = new Sequelize('perum', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;