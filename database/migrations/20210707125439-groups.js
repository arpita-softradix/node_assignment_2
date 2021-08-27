'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('groups', {
    group_id: {
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
    info:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    about_group:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    image:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    privacy_type:{
       type:   Sequelize.ENUM,
      values: ['public', 'closed', 'secret']
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('groups'),
};