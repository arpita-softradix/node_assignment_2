'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('interests', {
    interest_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    interest: {
      type: Sequelize.STRING(64),
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('interests'),
};