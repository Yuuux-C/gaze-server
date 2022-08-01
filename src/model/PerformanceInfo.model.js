const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/seq");
const PerformanceInfo = sequelize.define("gz_performanceInfo", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  web_redirect: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_DNS: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_TCP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_SSL: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_TTFB: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_transmit: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  web_domReady: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_FP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_FCP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_LCP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_FMP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_DCL: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_L: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_TTI: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  page_FID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
// 创建表
PerformanceInfo.sync({ force: true });
module.exports = PerformanceInfo;
