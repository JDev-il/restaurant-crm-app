const passport = require("passport"),
PUB_KEY = require("./hash_key"),
    JwtStrategy = require('passport-jwt').Strategy,
    localStrategy = require("passport-local").Strategy, 
        ExtractJwt = require('passport-jwt').ExtractJwt;
    
    new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: false
    }, (username, password, done) => {
    }


)

var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
}

// const fn = 
// passport.use(new JwtStrategy(options, function(jwt_payload, done){
//     console.log(jwt_payload);
// }))

// module.exports = fn


