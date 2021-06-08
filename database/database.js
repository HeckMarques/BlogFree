const Sequelize = require("sequelize");
const connection = new Sequelize('blogfree', 'mau9797', '99296038mhm', {
    host: 'mysql742.umbler.com',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;