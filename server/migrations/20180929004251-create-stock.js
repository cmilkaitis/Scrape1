"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("stocks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticker: {
        type: Sequelize.STRING
      },
      change: { type: Sequelize.DECIMAL },
      last_price: { type: Sequelize.DECIMAL },
      market_cap: { type: Sequelize.STRING },
      market_time: { type: Sequelize.STRING },
      percent_change: { type: Sequelize.DECIMAL },
      volume: { type: Sequelize.STRING },
      timestamp: { type: Sequelize.DATE },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("stocks");
  }
};
