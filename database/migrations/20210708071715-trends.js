'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.createTable('trends', {
     trend_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
       allowNull: true
    },
    tag_id:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    location_id:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    total_likes:{
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_comments:{
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    privacy_type:{
       type:   Sequelize.ENUM,
      values: ['public', 'private', 'friends']
    },
    media_type:{
      type:   Sequelize.ENUM,
      values: ['image', 'video']
    },
    media:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    title:{
      type: Sequelize.STRING(64),
      allowNull: true
    },
    discription:{
      type: Sequelize.STRING(255),
      allowNull: true
    },
    is_text_notify:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    is_audio_notify:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    is_expired:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    expiry_date: {
      type: Sequelize.DATE,
      allowNull: false
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('trends'),
};