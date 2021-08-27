module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    role_id: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    email: {
      type: Sequelize.STRING(64),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: true
    },
    first_name: {
      type: Sequelize.STRING(64),
      allowNull: true
    },
    last_name:{
      type: Sequelize.STRING(64),
      allowNull: true
    },
    phone_number: {
      type: Sequelize.STRING(15),
      allowNull: true,
    },
    city:{
      type: Sequelize.STRING(64),
      allowNull: true
    },
    dob:{
      type: Sequelize.DATE,
      allowNull: true
    },
    about_me:{
      type: Sequelize.TEXT(),
      allowNull: true
    },
    education:{
      type: Sequelize.STRING(64),
      allowNull: true
    },
    religion:{
      type: Sequelize.STRING(64),
      allowNull: true
    },
    otp:{
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    image:{ 
      type: Sequelize.STRING(255),
      allowNull: true
    },
    points:{
       type: Sequelize.INTEGER,
       allowNull: true
    },
    is_email_verify:{
      type: Sequelize.TINYINT,
      allowNull: true,
    },
    is_phone_verify:{
      type: Sequelize.TINYINT,
      allowNull: true,
    },
    can_bio_update:{
      type: Sequelize.DATE,
      allowNull: true
    },
    terms_privacy:{
      type: Sequelize.TINYINT,
      allowNull: true,
    },
    total_followers:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    total_following:{
      type: Sequelize.INTEGER,
      allowNull: true
    },
    is_active:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    is_deleted:{
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      timestamps: true
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      timestamps: true
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
