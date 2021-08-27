
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    permanent_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    current_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alternate_phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    aadhar_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      timestamps: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      timestamps: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      timestamps: true
    },
  }, { paranoid: true });

  // Users.associate = function (models) {
  //   // associations can be defined here
  // };
  return users;
};
