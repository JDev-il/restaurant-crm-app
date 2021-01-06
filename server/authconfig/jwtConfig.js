const key_gen = require("../authconfig/hash_key");
const key = require("../authconfig/key").secret;

const jwt = require("jsonwebtoken");


module.exports = {
    authenticateToken: (req, res, next) => {
        const auth = req.headers.authorization;
        const tokenKey = auth.split(' ')[0]
        const token = auth.split(' ')[1];
        if(auth){
            jwt.verify(token, tokenKey, function(err, decoded){
                if(err){
                    res.sendStatus(401);
                } else {
                    res.send(decoded)
                }
            })
        }
    }
}
