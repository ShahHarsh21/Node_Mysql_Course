// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host : 'localhost',
//     user : 'root',
//     password : 'root',
//     database : 'demo_data'
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("demo_data", "root", "root", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
