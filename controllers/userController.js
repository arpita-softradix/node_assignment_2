const db = require('../models');
const Users = db.users;


const addUser = async (req, res) => {

    // let data = await Users.build({firstname:'test', lastname:'avcs', email:'test123@gmail.com', password:'12fee3', phone_no:'246879783', age:'21'});
    // await data.save();

    //let {email} = req.body;
    console.log(req.body);
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user) {
        // already exit
        return res.status(200).json({ message: "Email already exist!", status: 0, code: 400, data: user.dataValues })
    }
    const data = await Users.create(req.body);
    console.log(data.dataValues);

    res.status(200).json({ message: "Registration successfull", status: 1, code: 200, data: data.dataValues });
}

module.exports = {
    addUser
}
