
module.exports = (sequelize,DataTypes) => {
    const User_rolls = sequelize.define("user_roll", {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        roll_id: DataTypes.INTEGER
    });

    return User_rolls;
}