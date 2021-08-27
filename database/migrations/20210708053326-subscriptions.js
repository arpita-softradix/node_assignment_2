'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('subscriptions', {
    subscription_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    plan:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    price:{
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    disccount:{
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    status:{
      type: Sequelize.TINYINT,
      allowNull: true,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('subscriptions'),
};