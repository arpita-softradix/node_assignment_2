module.exports = (sequelize, DataTypes) => {
  const users_profile_image = sequelize.define('users_profile_image', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.BLOB('long')
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
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
  return users_profile_image;
};
