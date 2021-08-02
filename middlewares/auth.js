const jwt = require('jsonwebtoken');

const jwt_authenticate = async (req, res, next) => {
    const token = req.headers.authorization
    console.log("token : ", token);

    if (!token) {
        return res.status(200).json({ message: "Auth token is not given", status: 0, code: 400 });
    }
    else {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.status(200).json({ message: "Token expired!!", status: 0, code: 400 });
            }
            else {
                req.user = decoded;
                console.log("decoded : ", req.decoded);
                next();
            }
        });
    }

}


module.exports = jwt_authenticate;