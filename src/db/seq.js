const { Sequelize } = require("sequelize");
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require("../config/config");
const sequelize = new Sequelize("gaze", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("连接数据库成功");
//   })
//   .catch((err) => {
//     console.log("失败", err);
//   });
