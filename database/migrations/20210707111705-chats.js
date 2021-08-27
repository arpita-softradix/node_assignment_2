'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('chats', {
    chat_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    thread_id: {
       type: Sequelize.STRING(255),
      allowNull: true
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
    message_time:{
      type: Sequelize.DATE,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('chats'),
};
