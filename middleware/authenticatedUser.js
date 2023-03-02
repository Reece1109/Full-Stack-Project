// Importing Authentication Of Middleware
require('dotenv').config();
const{sign,verify} = require('jsonwebtoken');

// How to create a token
function createToken(user) {
    return sign ({
        email: user.emailAdd,
        password: user.userPass
    },
process.env. SECRET_KEY,
{
    expiresIn: '30min'
});
}

// Verification function
function verifyAToken(req, res, next) {
    try{
        const token = req.cookies
        ["RealUser"] !== null ? req.cookies["RealUser"] :
        "Register Please";
        const isValid = null;
        if(token !== "Please register") {
            isValid = verify(token,process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            }else{
                res.status(400).json
                ({err: "Register Please"})
            }
}else {
    res.status(400).json({err: e.message});
    }
}catch(e){
    res.status(400).json({err: e.message});
    }
}
module.exports= {createToken, verifyAToken};