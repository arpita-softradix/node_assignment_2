var sql = require('mysql');

const dbConnection = sql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "node_assignment_2"
})

dbConnection.connect(function(err){
    if (err) {
        throw err;
    } else {
        console.log("database connected");
    }
})

module.exports = dbConnection;
