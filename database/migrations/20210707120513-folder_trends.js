'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('folder_trends', {
    folder_trend_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    folder_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    trend_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('folder_trends'),
};
