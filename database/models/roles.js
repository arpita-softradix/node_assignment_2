module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  // Users.associate = function (models) {
  //   // associations can be defined here
  // };
  return roles;
};

