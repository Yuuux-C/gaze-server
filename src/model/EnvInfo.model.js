const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/seq");
const EnvInfo = sequelize.define("gz_envinfo", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //唯一
  },
  os_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  os_version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  browser_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  browser_version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// 创建表
EnvInfo.sync({ force: true });
module.exports = EnvInfo;
