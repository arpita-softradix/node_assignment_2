const bcrypt = require("bcrypt");

// create table for users
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            // Storing passwords by Hashing the value .
            set(value) {
                const hash = bcrypt.hashSync(value, 10);
                this.setDataValue('password', hash);
            },
        },
        phone_no: DataTypes.STRING,
        age: DataTypes.INTEGER
    });

    return Users;
}
