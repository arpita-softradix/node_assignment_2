const jwt = require('jsonwebtoken');
const db = require('../models');
const Users = db.users;

const jwt_authenticate = async (req, res, next) => {
    const token = req.headers.authorization
    //console.log("token : ", token);

    if (!token) {
        return res.status(200).json({ message: "Auth token is not given", status: 0, code: 400 });
    }
    else {
        // check token validation
        const decodedToken = jwt.decode(token);
        // console.log("decoded token : ", decodedToken);
        const now = Date.now().valueOf() / 1000;
        if (typeof decodedToken.exp !== 'undefined' && decodedToken.exp < now) {
            return res.status(200).json({ message: "Token expired!!", status: 0, code: 400 });
        }
        else{
            //  check user authorization
            const user = await Users.findOne({where: {email : decodedToken.email}});
            if (!user) {
                return res.status(200).json({message: "User not authorized!", status: 0, code: 401});
            }
        }
        next();

        // jwt.verify(token, 'secret', (err, decoded) => {
        //     if (err) {
        //         return res.status(200).json({ message: "Token expired!!", status: 0, code: 400 });
        //     }
        //     else {
        //         req.user = decoded;
        //         console.log("decoded : ", req.user);
        //         next();
        //     }
        // });
    }
}


module.exports = jwt_authenticate;