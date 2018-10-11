"use strict";
module.exports = (sequelize, Sequelize) => {
  const stock = sequelize.define("stock", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    ticker: Sequelize.STRING,
    change: Sequelize.DECIMAL,
    last_price: Sequelize.DECIMAL,
    market_cap: Sequelize.STRING,
    market_time: Sequelize.STRING,
    percent_change: Sequelize.DECIMAL,
    volume: { type: Sequelize.STRING },
    timestamp: Sequelize.DATE
  });
  stock.associate = function(models) {
    // associations can be defined here
  };
  return stock;
};
