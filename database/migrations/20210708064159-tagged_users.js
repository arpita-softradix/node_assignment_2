'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('tagged_users', {
    tagged_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    tagged_user_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    trend_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    is_deleted:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 0
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('tagged_users'),
};