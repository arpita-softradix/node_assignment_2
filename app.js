const express = require('express');
const { request } = require('http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3030;
require('./models');
const userCtrl = require('./controllers/userController');

// cors
app.use(cors({
    origin: '*'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/add', userCtrl.addUser);

app.get('/login', userCtrl.loginUser); 


app.listen(port,()=> {
    console.log(`App is listening at http://localhost:${port}`);
});


