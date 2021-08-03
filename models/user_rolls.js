
// create table for user_rolls
module.exports = (sequelize, DataTypes) => {
    const User_rolls = sequelize.define("user_rolls", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        roll_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return User_rolls;
}