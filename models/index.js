const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('arpita', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
    pool:{max:5, min:0, idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("Error"+err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);
db.user_rolls = require('./user_rolls')(sequelize,DataTypes);

db.sequelize.sync({force:true,match:/arpita$/})
.then( () => {
    console.log("yes re-sync");
})

module.exports = db;
