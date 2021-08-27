'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('folders', {
    comment_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    image:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    trend_count:{
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('folders'),
};
