'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('tags', {
    tag_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    tag_name: {
      type: Sequelize.STRING(100),
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('tags'),
};