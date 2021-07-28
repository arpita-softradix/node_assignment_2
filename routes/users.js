var express = require('express');
const bcrypt = require('bcrypt');
const dbConnection = require('./dbConnection');
const user = express.Router();

user.post('/', function (req, res) {
  const { firstname, lastname, email, password } = req.body;
  const user_register_query = `INSERT INTO users(firstname, lastname, email, password) VALUES (?,?,?,?)`;
  const check_existing_user_query = `SELECT * FROM users WHERE email = ?`;
  db.query(check_existing_user_query, [email], (err, user_exist) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else {
      if (user_exist.length) {
        res.send({
          message: "user already exist !!!",
          user: user_exist
        })
      } else {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, function (err, hashpassword) {
          db.query(user_register_query, [firstname, lastname, email, hashpassword], (err, result) => {
            if (err) {
              res.status(400).send({ message: err.message });
            }
            else {
              res.status(200).json({
                message: "register successfully",
                user: result
              })
            }
          })
        });
      }
    }
  })
})


module.exports = user;
