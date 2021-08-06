const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('node_assignment_2', 'root', '', {
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

db.sequelize.sync({force:false,match:/node_assignment_2$/})
.then( () => {
    console.log("yes re-sync");
})

module.exports = db;
