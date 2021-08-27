'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('notifications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    sender_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    receiver_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    is_read: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    message:{
      type: Sequelize.TEXT,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('notifications'),
};