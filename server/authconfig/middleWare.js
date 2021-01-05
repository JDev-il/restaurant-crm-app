// var jwt = require("jsonwebtoken");
const PUB_KEY = require("../connection/sk")

var JwtStrategy = require('passport-jwt').Strategy, 
    ExtractJwt = require('passport-jwt').ExtractJwt;
    
var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}

const strategy = new JwtStrategy(options, (payload, done) => {

})

module.exports = (passport) => {
    passport.use(strategy)
}

// passport.use(new JwtStrategy(options, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     });
// }));