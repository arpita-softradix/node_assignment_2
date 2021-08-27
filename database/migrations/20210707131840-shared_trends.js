'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('shared_trends', {
    shared_trends_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    trend_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    user_id: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('shared_trends'),
};