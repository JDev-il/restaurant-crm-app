// Call the the details from front end and parse them below

var User = require("../models/User");

const subscriber = new User({
    first_name: String(),
    last_name: String(),
    email: String(),
    password: Number() || null
});

module.exports = subscriber