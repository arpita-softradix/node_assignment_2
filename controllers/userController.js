const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const db = require('../models');
const Users = db.users;

//----  add registered user  ----
const addUser = async (req, res) => {

    // let data = await Users.build({firstname:'test', lastname:'avcs', email:'test123@gmail.com', password:'12fee3', phone_no:'246879783', age:'21'});
    // await data.save();

    //let {email} = req.body;
    console.log(req.body);
    //---- check existing user by email ----
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user) {
        return res.status(200).json({ message: "Email already exist!", status: 0, code: 400 });
    }
    //----  add new user  ----
    const data = await Users.create(req.body);
    // console.log(data.dataValues);
    delete data.dataValues['password'];
    res.status(200).json({ message: "Registration successfull", status: 1, code: 200, data: data.dataValues });
}

const loginUser = async (req, res) => {
    //---- check existing user by email ----
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (!user) {
        //---- invalid email  ----
        return res.status(200).json({ message: "Invalid user!", status: 0, code: 401 })
    }
    //---- password validation  ----
    const passwordValidation = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordValidation) {
        return res.status(200).json({ message: "Invalid email or password!", status: 0, code: 401 });
    }
    //---- create jwt token  ----
    const jwtToken = jwt.sign({ email: user.email }, 'secret', { expiresIn: '20m' });

    delete user.dataValues['password'];
    user.dataValues["token"] = jwtToken;
    res.status(200).json({ message: "Login successfull", status: 1, code: 200, data: user.dataValues });
}

const getUserList = async (req, res) => {
    const user_lists = await Users.findAll({ attributes: { exclude: ['password'] } });
    res.status(200).json({ message: "List of users", status: 1, code: 200, data: user_lists });
}

const getUserById = async (req, res) => {
    // const user_id = req.params.id;
    const user = await Users.findOne({ attributes: { exclude: ['password'] }, where: { id: req.params.id } });
    res.status(200).json({ message: "User details", status: 1, code: 200, data: user });
}

//----  update user by id  ---
const updateUserById = async (req, res) => {

    Users.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(function (users) {
        res.status(200).json({ message: "Update successfull", status: 1, code: 200, data: req.body });
        console.log(users);
    })
        .catch(err => {
            return res.status(200).json({ status: 0, code: 400, message: err.message });
        }
        );

}

//----  user list pagination  ----
const pagination = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    console.log("page : ", page);
    console.log("limit : ", limit);
    const offset = page ? page * limit : 0;
    console.log("offset : ", offset);
    const data = await Users.findAndCountAll({ limit: limit, offset: offset });
    const totalPages = Math.ceil(data.count / limit);
    console.log("offset : ", offset);
    const currentPageSize = data.rows.length;

    res.status(200).json({ message: "User details", status: 1, code: 200, data: data });

}

module.exports = {
    addUser,
    loginUser,
    getUserList,
    getUserById,
    updateUserById,
    pagination
}
