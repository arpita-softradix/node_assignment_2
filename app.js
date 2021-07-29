const express = require('express');
const { request } = require('http');
const app = express();
const bodyParser = require('body-parser');

const port = 3030;
require('./models');
const userCtrl = require('./controllers/userController');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (res, resp) => {
    resp.send("Home page");
});

app.post('/add', userCtrl.addUser);


app.listen(port,()=> {
    console.log(`App is listening at http://localhost:${port}`);
});


